import express, {Express} from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';

import router from './router';
import {AppDataSource} from './db/data-source';

import swagger from './endpoints/swagger';
import http from 'http';

export default class Jewelery {
    private app: Express;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config(): void {
        this.app.set('etag', false);
        this.app.disable('x-powered-by');
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }

    private async dbConnect(): Promise<void> {
        try {
            await AppDataSource.initialize();
            console.log("Data Source has been initialized!")
        } catch (err) {
            console.error("Error during Data Source initialization:", err)
        }
    }

    private routerConfig(): void {
        this.app.use('/jewelery', router);
        swagger.init(this.app);
    }

    public start = async (port: number): Promise<http.Server> => {
        return this.app.listen(port, () => {
            return port;
        }).on('error', (err: Object) => {
            throw err;
        });
    }
}
