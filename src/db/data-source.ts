import 'reflect-metadata'
import { DataSource } from 'typeorm'

import {CaratWeight} from '../entity/carat-weight';
import {Cut} from '../entity/cut';
import {Color} from '../entity/color';
import {Clarity} from '../entity/clarity';
import Price from '../entity/price';
import {Forms} from '../entity/form';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST || 'localhost',
    port: 5432,
    username: process.env.USERNAME || 'postgres',
    password: process.env.PASS || 'password',
    database: process.env.DB || 'jewelery',
    synchronize: true,
    logging: ["error", 'query', 'schema'],
    entities: [CaratWeight, Price, Clarity, Color, Cut, Forms],
    migrations: [],
    subscribers: [],
});

