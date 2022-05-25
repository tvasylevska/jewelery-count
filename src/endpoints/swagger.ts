import swaggerUi from 'swagger-ui-express';
import SwaggerConf from '../common/swagger-conf';
import {Express} from 'express';
import swaggerJSDoc from 'swagger-jsdoc';

class Swagger {
    private options: any;
    private swaggerSpec: object;
    private _basePath: string;
    private extention: string;

    constructor() {
        this.options = SwaggerConf.conf();
        this._basePath = '/jewelery'
        this.extention = process.env.prod ? 'js' : 'ts'
    }

    public async init(app: Express): Promise<void> {
        const routes = [`${__dirname}/calc.${this.extention}`, `${__dirname}/similar.${this.extention}`]
        try {
            this.swaggerSpec = swaggerJSDoc({
                swaggerDefinition: this.options,
                apis: routes
            });
        } catch (err) {
            console.log(err);
        }

        app.use(`${this._basePath}/explore`, swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));

        console.log(`Docs available at http://localhost:3000${this._basePath}/explore`);
    }
}

export default new Swagger()
