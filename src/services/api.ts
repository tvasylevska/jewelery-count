import {AppDataSource} from '../db/data-source';
import {EntityTarget} from 'typeorm';
import {Cut} from '../entity/cut';
import {CaratWeight} from '../entity/carat-weight';
import {Clarity} from '../entity/clarity';
import _ from 'lodash';
import {Color} from '../entity/color';
import { IEntity} from '../common/types';
import {Forms} from '../entity/form';

class Api {
    private getEntity(type: string, value: string): IEntity {
        switch (type) {
            case 'clarity':
                return {entity: Clarity, clarity: value};
            case 'color':
                return {entity: Color, color_type: value};
            case 'cut':
                return {entity: Cut, cut_type: value};
            case 'weight':
                return {entity: CaratWeight, weight: value};
            case 'form':
                return {entity: Forms, form_type: value};
            default:
                throw `Such entity ${type} does not exist`
        }
    }

    public async getBySpecifiedParams(params: any): Promise<string[]> {
        let promises: Promise<any>[] = [];

        _.forEach(params, (val, key) => {
            const {entity, ...param} = this.getEntity(key, val);
            promises.push(this.getProp(entity, param))
        })

        try {
            return Promise.all(promises);
        } catch (err) {
            throw err;
        }
    }

    private async getProp(repo: EntityTarget<any>, field: {}): Promise<any> {
        return AppDataSource.getRepository(repo)
            .find({
                relations: {
                    price: true,
                },
                where: field
            });
    }
}

export default new Api();
