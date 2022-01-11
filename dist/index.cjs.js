'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isWhat = require('is-what');

/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
function removeProps(payload, valuesToRemove) {
    if (valuesToRemove === void 0) { valuesToRemove = []; }
    if (!isWhat.isPlainObject(payload) || !isWhat.isFullArray(valuesToRemove))
        return payload;
    var removeEmptyObjects = !!valuesToRemove.find(function (val) { return isWhat.isEmptyObject(val); });
    return Object.entries(payload).reduce(function (carry, _a) {
        var key = _a[0], value = _a[1];
        if (removeEmptyObjects && isWhat.isEmptyObject(value))
            return carry;
        if (valuesToRemove.includes(value))
            return carry;
        var newVal = removeProps(value, valuesToRemove);
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
