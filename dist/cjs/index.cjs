'use strict';

const isWhat = require('is-what');

function removeProp(payload, valueToRemove, ...valuesToRemove) {
  if (!isWhat.isPlainObject(payload))
    return payload;
  const remove = [valueToRemove, ...valuesToRemove];
  const removeEmptyObjects = !!remove.find((val) => isWhat.isEmptyObject(val));
  const removeEmptyArrays = !!remove.find((val) => isWhat.isEmptyArray(val));
  return Object.entries(payload).reduce((carry, [key, value]) => {
    if (removeEmptyObjects && isWhat.isEmptyObject(value))
      return carry;
    if (removeEmptyArrays && isWhat.isEmptyArray(value))
      return carry;
    if (remove.includes(value))
      return carry;
    const newVal = removeProp(value, remove[0], ...remove.slice(1));
    if (removeEmptyObjects && isWhat.isEmptyObject(newVal))
      return carry;
    if (removeEmptyArrays && isWhat.isEmptyArray(newVal))
      return carry;
    carry[key] = newVal;
    return carry;
  }, {});
}
const removeProps = (payload, valuesToRemove) => removeProp(payload, valuesToRemove[0], ...valuesToRemove);

exports.removeProp = removeProp;
exports.removeProps = removeProps;
