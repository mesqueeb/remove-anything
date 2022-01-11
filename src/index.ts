import { isEmptyObject, isFullArray, isPlainObject } from 'is-what'

// function overload for external use & type accuracy
export function removeProps<Payload extends Record<string, any>>(
  payload: Payload,
  valuesToRemove: any[]
): Payload
/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
export function removeProps(
  payload: Record<string, any>,
  valuesToRemove: any[] = []
): Record<string, any> {
  if (!isPlainObject(payload) || !isFullArray(valuesToRemove)) return payload
  return Object.entries(payload).reduce((carry, [key, value]) => {
    if (valuesToRemove.includes(value)) return carry
    carry[key] = removeProps(value, valuesToRemove)
    return carry
  }, {} as Record<string, any>)
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

/**
 * Recursively removes empty objects from an object
 */
export function removeEmptyObjects(payload: Record<string, any>): Record<string, any> {
  if (!isPlainObject(payload)) return payload
  return Object.entries(payload).reduce<Record<string, any>>((carry, [key, value]) => {
    if (isEmptyObject(value)) return carry
    const newVal = removeEmptyObjects(value)
    if (isEmptyObject(newVal)) return carry
    carry[key] = newVal
    return carry
  }, {})
}
