import { isEmptyObject, isEmptyArray, isFullArray, isPlainObject } from 'is-what'

/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
export function removeProps(
  payload: Record<string, any>,
  valuesToRemove: any[] = []
): Record<string, unknown> {
  if (!isPlainObject(payload) || !isFullArray(valuesToRemove)) return payload

  const removeEmptyObjects = !!valuesToRemove.find((val) => isEmptyObject(val))
  const removeEmptyArrays = !!valuesToRemove.find((val) => isEmptyArray(val))

  return Object.entries(payload).reduce<Record<string, any>>((carry, [key, value]) => {
    if (removeEmptyObjects && isEmptyObject(value)) return carry
    if (removeEmptyArrays && isEmptyArray(value)) return carry
    if (valuesToRemove.includes(value)) return carry

    const newVal = removeProps(value, valuesToRemove)
    if (removeEmptyObjects && isEmptyObject(newVal)) return carry
    if (removeEmptyArrays && isEmptyArray(newVal)) return carry

    carry[key] = newVal
    return carry
  }, {})
}

// function overload for external use & type accuracy
export function removeProp<Payload extends Record<string, any>>(
  payload: Payload,
  valueToRemove: any
): Payload
/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
export function removeProp(payload: Record<string, any>, valueToRemove: any): Record<string, any> {
  return removeProps(payload, [valueToRemove])
}
