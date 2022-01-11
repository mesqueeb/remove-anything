import { isPlainObject, isFullArray, isEmptyObject } from 'is-what';

/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
function removeProps(payload, valuesToRemove) {
    if (valuesToRemove === void 0) { valuesToRemove = []; }
    if (!isPlainObject(payload) || !isFullArray(valuesToRemove))
        return payload;
    return Object.entries(payload).reduce(function (carry, _a) {
        var key = _a[0], value = _a[1];
        if (valuesToRemove.includes(value))
            return carry;
        carry[key] = removeProps(value, valuesToRemove);
        return carry;
    }, {});
}
/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
function removeProp(payload, valueToRemove) {
    return removeProps(payload, [valueToRemove]);
}
/**
 * Recursively removes empty objects from an object
 */
function removeEmptyObjects(payload) {
    if (!isPlainObject(payload))
        return payload;
    return Object.entries(payload).reduce(function (carry, _a) {
        var key = _a[0], value = _a[1];
        if (isEmptyObject(value))
            return carry;
        var newVal = removeEmptyObjects(value);
        if (isEmptyObject(newVal))
            return carry;
        carry[key] = newVal;
        return carry;
    }, {});
}

export { removeEmptyObjects, removeProp, removeProps };
