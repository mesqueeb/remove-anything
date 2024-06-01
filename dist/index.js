import { isEmptyArray, isEmptyObject, isPlainObject } from 'is-what';
/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
export function removeProp(payload, valueToRemove, ...valuesToRemove) {
    if (!isPlainObject(payload))
        return payload;
    const remove = [valueToRemove, ...valuesToRemove];
    const removeEmptyObjects = !!remove.find((val) => isEmptyObject(val));
    const removeEmptyArrays = !!remove.find((val) => isEmptyArray(val));
    return Object.entries(payload).reduce((carry, [key, value]) => {
        if (removeEmptyObjects && isEmptyObject(value))
            return carry;
        if (removeEmptyArrays && isEmptyArray(value))
            return carry;
        if (remove.includes(value))
            return carry;
        const newVal = removeProp(value, remove[0], ...remove.slice(1));
        if (removeEmptyObjects && isEmptyObject(newVal))
            return carry;
        if (removeEmptyArrays && isEmptyArray(newVal))
            return carry;
        carry[key] = newVal;
        return carry;
    }, {});
}
/**
 * @deprecated use `removeProp` instead and pass multiple parameters
 */
export const removeProps = (payload, valuesToRemove) => removeProp(payload, valuesToRemove[0], ...valuesToRemove);
