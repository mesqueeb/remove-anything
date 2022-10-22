import { isPlainObject, isFullArray, isEmptyObject, isEmptyArray } from 'is-what';

/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
function removeProps(payload, valuesToRemove = []) {
    if (!isPlainObject(payload) || !isFullArray(valuesToRemove))
        return payload;
    const removeEmptyObjects = !!valuesToRemove.find((val) => isEmptyObject(val));
    const removeEmptyArrays = !!valuesToRemove.find((val) => isEmptyArray(val));
    return Object.entries(payload).reduce((carry, [key, value]) => {
        if (removeEmptyObjects && isEmptyObject(value))
            return carry;
        if (removeEmptyArrays && isEmptyArray(value))
            return carry;
        if (valuesToRemove.includes(value))
            return carry;
        const newVal = removeProps(value, valuesToRemove);
        if (removeEmptyObjects && isEmptyObject(newVal))
            return carry;
        if (removeEmptyArrays && isEmptyArray(newVal))
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
