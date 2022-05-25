import {IDiamond, ResourceFound} from '../common/types';
import api from './api';
import _ from 'lodash';

export default class CalcService {

    public async getPrise(params: IDiamond): Promise<ResourceFound> {
        try {
            const data = await api.getBySpecifiedParams(params);
            let formData = this.countJewPrice(data);
            return this.setResp(formData, true);
        } catch (err: any | undefined) {
            throw this.setResp(err, false);
        }
    }

    private countJewPrice(data: string[]): {price: number} {
        const price = _.reduce(data, (memo, item) => {
            const count = _.map(item, 'price.price')[0] || 0;
            return memo += Number(count)
        }, 0);

        return {price}
    }

    private setResp<T, B extends boolean>(formData: T, isOk: B) {
        return {
            status: isOk ? 'ok' : 'failed',
            data: formData
        }
    }


}
