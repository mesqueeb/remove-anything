'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isWhat = require('is-what');

/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
function removeProps(payload, valuesToRemove = []) {
    if (!isWhat.isPlainObject(payload) || !isWhat.isFullArray(valuesToRemove))
        return payload;
    const removeEmptyObjects = !!valuesToRemove.find((val) => isWhat.isEmptyObject(val));
    return Object.entries(payload).reduce((carry, [key, value]) => {
        if (removeEmptyObjects && isWhat.isEmptyObject(value))
            return carry;
        if (valuesToRemove.includes(value))
            return carry;
        const newVal = removeProps(value, valuesToRemove);
        if (removeEmptyObjects && isWhat.isEmptyObject(newVal))
            return carry;
        carry[key] = newVal;
        return carry;
    }, {});
}
/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
function removeProp(payload, valueToRemove) {
    return removeProps(payload, [valueToRemove]);
}

exports.removeProp = removeProp;
exports.removeProps = removeProps;
