import {Promise} from 'es6-promise';

import {synchronouslyThen} from './promise-commons';

export default class Semaphore {
    acquire() {}
    release() {}
    
    acquired<T>(action: () => Promise<T>) {
        this.acquire();
        return synchronouslyThen(
            action(), () => this.release());
    }
}