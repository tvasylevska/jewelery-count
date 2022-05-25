import Redis from 'ioredis';
import IORedis from 'ioredis';
import _ from 'lodash';
import {EnumTypes, IDiamond, NotFound} from '../common/types';


class Cache {
    private redis: IORedis.Redis;

    constructor() {
        this.redis = new Redis({
            host: process.env.REDIS_HOST || 'localhost'
        });
    }

    private async getKeys(): Promise<any[]> {
        let promises: Promise<any>[] = [];

        const keys = await this.redis.lrange('keys', 0, -1);
        _.forEach(keys, item => promises.push(this.redis.get(item)));

        return promises;
    }

    public async cachedValues(): Promise<EnumTypes[] | NotFound> {
        try {
            const promises = await this.getKeys();
            const rez = await Promise.all(promises);

            if (!_.isEmpty(rez)) {
                return _.forEach(rez, (item, k) => rez[k] = JSON.parse(item));
            } else {
                return {
                    status: 'ok',
                    data: {
                        message: 'No results according to previous search'
                    }
                };
            }
        } catch (err) {
            throw err;
        }
    }

    public async setCacheData(result: IDiamond) {
        const keys = _.map(Object.entries(result), ([, val]) => val).join('|')
        await this.redis.set(`counted:${keys}`, JSON.stringify(result), 'EX', (10 * 6) * 30);
        await this.redis.lpush('keys', `counted:${keys}`);
        this.redis.expire('keys', (10 * 6) * 30);
    }
}

export default new Cache()
