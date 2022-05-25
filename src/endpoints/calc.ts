import {Request, Response} from 'express';
import * as _ from 'lodash';
import CalcService from '../services/calc-service';
import {IDiamond} from '../common/types';
import cache from '../services/cache';

/**
 * @swagger
 * /count:
 *   get:
 *      description: Counts price according to passed parameters
 *      parameters:
 *          - name: weight
 *            in: query
 *            type: string
 *            description: Represents Carat Weight
 *            required: true
 *          - name: clarity
 *            in: query
 *            type: string
 *            enum:
 *              - LC
 *              - VVS2
 *              - IF
 *              - VVS1
 *              - VS1
 *              - SI2
 *              - FL
 *              - P2
 *              - P3
 *              - VS2
 *              - SI1
 *              - P1
 *            description: Represents Carat clarity
 *            required: true
 *          - name: cut
 *            in: query
 *            type: string
 *            enum:
 *              - LC
 *              - VVS2
 *              - IF
 *              - VVS1
 *              - FL
 *            description: Represents Carat Cut
 *            required: true
 *          - name: form
 *            in: query
 *            type: string
 *            enum:
 *              - circle
 *              - heart
 *              - drop
 *              - shadow
 *              - rectangle
 *              - oval
 *              - square
 *            description: Represents Carat Form
 *            required: true
 *          - name: color
 *            in: query
 *            type: string
 *            enum:
 *              - LC
 *              - VVS2
 *              - IF
 *              - VVS1
 *              - VS1
 *              - SI2
 *              - FL
 *              - VS2
 *              - SI1
 *              - P1
 *            description: Represents Carat Color
 *            required: true
 *      responses:
 *          "200":
 *              description: Success
 *              schema:
 *                  $ref: "#/definitions/countedStatusResponse"
 * definitions:
 *  countedStatusResponse:
 *   type: object
 *   properties:
 *    status:
 *     type: string
 *     default: 'ok'
 *    data:
 *     type: object
 *     properties:
 *      price:
 *       type: number
 *       description: Calculated value from given properties.
 *
 */
export default class Calculator {
    private calcSrv: CalcService;

    constructor() {
        this.calcSrv = new CalcService();
    }

    public serviceHandler = async (req: Request, res: Response): Promise<any> => {
        let data: IDiamond;
        data = _.isEmpty(req.query) ? _.get(req, 'body') : _.get(req, 'query');
        try {
            const resData = await this.calcSrv.getPrise(data);

            await cache.setCacheData(Calculator.formStoreData(data, resData));
            res.send(resData)
        } catch (err) {
            res.status(400).send(err);
        }
    }

    private static formStoreData(data: IDiamond, resData: any): IDiamond {
        let { data: { price } } = resData
        return { price, ...data }
    }

}
