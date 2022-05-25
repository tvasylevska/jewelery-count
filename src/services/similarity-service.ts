import {EnumTypes, IDiamond, NotFound, ResourceFound} from '../common/types';
import cache from './cache';
import _ from 'lodash';

export default class SimilarityService {

    public async getSimilar(params: IDiamond): Promise<EnumTypes[] | ResourceFound> {
        try {
            const allSearch: EnumTypes[] | NotFound = await cache.cachedValues();

            if (_.get(allSearch, 'status')) {
                return allSearch;
            }

            const newArr = this.findByParams(params, allSearch);
            return {
                status: 'ok',
                data: newArr.length ? newArr : { message: 'No results according to previous search'}
            }
        } catch (err) {
            throw err;
        }
    }

    private findByParams(params: Partial<IDiamond>, storeItems: any): string[] {
        let {weight, cut, color, clarity, form} = params;
        const num = Number(params.weight);
        const start = _.inRange(num, num > 1 ? num - 1 : num, num + 3)
        return _.filter(storeItems, (item) => {
            if (item.clarity.toLowerCase() === clarity?.toLowerCase()) return item;
            if (item.color.toLowerCase() === color?.toLowerCase()) return item;
            if (item.cut.toLowerCase() === cut?.toLowerCase()) return item;
            if (item.weight.toLowerCase() === weight?.toLowerCase() || start) return item;
            if (item.form.toLowerCase() === form?.toLowerCase()) return item;
        });
    }
}
