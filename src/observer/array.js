/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
import collection from '../collection.js';
import { def } from '../util/lang.js';

const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    const original = arrayProto[method];
    def(arrayMethods, method, function mutator (...args) {
        const result = original.apply(this, args);
        switch (method) {
            case 'push':
            case 'unshift':
                collection(['_trackEvent', 'nav', 'click-']);
                break
            case 'splice':
                break
        }
        return result;
    })
})