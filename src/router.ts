import * as express from 'express';
import Calculator from './endpoints/calc';
import Similar from './endpoints/similar';

const router = express.Router();
const calculator = new Calculator();
const similar = new Similar()
// @ts-ignore
const wrap = fn => (...args) => fn(...args).catch(args[2]);

router.all('/count', wrap(calculator.serviceHandler));
router.all('/similar', wrap(similar.serviceHandler));

export default router;
