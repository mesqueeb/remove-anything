import { isPlainObject, isFullArray } from 'is-what';

// internal more relaxed implementation
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
// internal more relaxed implementation
function removeProp(payload, valueToRemove) {
    return removeProps(payload, [valueToRemove]);
}

export { removeProp, removeProps };
