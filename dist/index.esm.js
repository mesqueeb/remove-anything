import { isPlainObject, isFullArray, isEmptyObject } from 'is-what';

/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
function removeProps(payload, valuesToRemove) {
    if (valuesToRemove === void 0) { valuesToRemove = []; }
    if (!isPlainObject(payload) || !isFullArray(valuesToRemove))
        return payload;
    var removeEmptyObjects = !!valuesToRemove.find(function (val) { return isEmptyObject(val); });
    return Object.entries(payload).reduce(function (carry, _a) {
        var key = _a[0], value = _a[1];
        if (removeEmptyObjects && isEmptyObject(value))
            return carry;
        if (valuesToRemove.includes(value))
            return carry;
        var newVal = removeProps(value, valuesToRemove);
        if (removeEmptyObjects && isEmptyObject(newVal))
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

export { removeProp, removeProps };
