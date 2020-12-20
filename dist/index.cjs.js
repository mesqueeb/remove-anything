'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isWhat = require('is-what');

// internal more relaxed implementation
function removeProps(payload, valuesToRemove) {
    if (valuesToRemove === void 0) { valuesToRemove = []; }
    if (!isWhat.isPlainObject(payload) || !isWhat.isFullArray(valuesToRemove))
        return payload;
    return Object.entries(payload).reduce(function (carry, _a) {
        var key = _a[0], value = _a[1];
        if (valuesToRemove.includes(value))
            return carry;
        carry[key] = removeProps(value, valuesToRemove);
        return carry;
    }, {});
}
// internal more relaxed implementation
function removeProp(payload, valueToRemove) {
    return removeProps(payload, [valueToRemove]);
}

exports.removeProp = removeProp;
exports.removeProps = removeProps;
