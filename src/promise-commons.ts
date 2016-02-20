import {Promise} from 'es6-promise';

export function synchronouslyThen<T>(
    promise: Promise<T>, action: () => void): Promise<T>
{
    return new Promise((resolve, reject) => {
        promise.then(
            value => {
                action();
                resolve(value);
            },
            error => {
                action();
                reject(error);
            });
    });
}