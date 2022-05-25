import {Request, Response} from 'express';
import * as _ from 'lodash';
import SimilarityService from '../services/similarity-service';
import {IDiamond} from '../common/types';

/**
 * @swagger
 * /similar:
 *   get:
 *      description: Returns previous calculated items that partially matches one of the passed parametr
 *      parameters:
 *          - name: weight
 *            in: query
 *            type: string
 *            description: Represents Carat Weight
 *            required: false
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
 *            required: false
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
 *            required: false
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
 *            required: false
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
 *            required: false
 *      responses:
 *          "200":
 *              description: Success
 *              schema:
 *                  $ref: "#/definitions/similarStatusResponse"
 * definitions:
 *  similarStatusResponse:
 *   type: object
 *   properties:
 *    status:
 *      type: string
 *      default: 'ok'
 *    data:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *        price:
 *         type: number
 *         description: Calculated value from given properties.
 *        clarity:
 *         type: string
 *         description: Previous calculated value from given properties.
 *        cut:
 *         type: string
 *         description: Previous calculated value from given properties.
 *        form:
 *         type: string
 *         description: Previous calculated value from given properties.
 *        color:
 *         type: string
 *         description: Previous calculated value from given properties.
 *        weight:
 *         type: string
 *         description: Previous calculated value from given properties.
 *
 */
export default class Similar {
    private similarSrv: SimilarityService;

    constructor() {
        this.similarSrv = new SimilarityService();
    }

    public serviceHandler = async (req: Request, res: Response): Promise<any> => {
        let data: IDiamond;
        data = _.isEmpty(req.query) ? _.get(req, 'body') : _.get(req, 'query');
        try {
            const resData = await this.similarSrv.getSimilar(data);
            res.send(resData)
        } catch (err) {
            res.status(400).send(err);
        }
    }



}
