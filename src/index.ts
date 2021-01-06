import { isFullArray, isPlainObject } from 'is-what'

type PlainObject = Record<string, any>

// function overload for external use & type accuracy
export function removeProps<Payload extends PlainObject> (
  payload: Payload,
  valuesToRemove: any[]
): Payload
/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
export function removeProps (
  payload: PlainObject,
  valuesToRemove: any[] = []
): PlainObject {
  if (!isPlainObject(payload) || !isFullArray(valuesToRemove)) return payload
  return Object.entries(payload).reduce((carry, [key, value]) => {
    if (valuesToRemove.includes(value)) return carry
    carry[key] = removeProps(value, valuesToRemove)
    return carry
  }, {} as PlainObject)
}

// function overload for external use & type accuracy
export function removeProp<Payload extends PlainObject> (
  payload: Payload,
  valueToRemove: any
): Payload
/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
export function removeProp (
  payload: PlainObject,
  valueToRemove: any
): PlainObject {
  return removeProps(payload, [valueToRemove])
}
