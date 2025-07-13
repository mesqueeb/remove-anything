/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { isEmptyArray, isEmptyObject, isPlainObject } from 'is-what'

/** Recursively remove props from an object, if the prop's value matches `valueToRemove` */
export function removeProp(
  payload: { [key in string | number | symbol]: unknown },
  valueToRemove: unknown,
  ...valuesToRemove: unknown[]
): { [key in string | number | symbol]: unknown } {
  if (!isPlainObject(payload)) return payload

  const remove = [valueToRemove, ...valuesToRemove]

  const removeEmptyObjects = !!remove.find((val) => isEmptyObject(val))
  const removeEmptyArrays = !!remove.find((val) => isEmptyArray(val))

  return Object.entries(payload).reduce<{ [key in string | number | symbol]: unknown }>(
    (carry, [key, value]) => {
      if (removeEmptyObjects && isEmptyObject(value)) return carry
      if (removeEmptyArrays && isEmptyArray(value)) return carry
      if (remove.includes(value)) return carry

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newVal = removeProp(value as any, remove[0], ...remove.slice(1))
      if (removeEmptyObjects && isEmptyObject(newVal)) return carry
      if (removeEmptyArrays && isEmptyArray(newVal)) return carry

      carry[key] = newVal
      return carry
    },
    {},
  )
}

/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 *
 * This function mutates the passed object in place and returns void.
 */
export function removePropInPlace(
  payload: { [key in string | number | symbol]: unknown },
  valueToRemove: unknown,
  ...valuesToRemove: unknown[]
): void {
  if (!isPlainObject(payload)) return

  const remove = [valueToRemove, ...valuesToRemove]

  const removeEmptyObjects = !!remove.find((val) => isEmptyObject(val))
  const removeEmptyArrays = !!remove.find((val) => isEmptyArray(val))

  Object.entries(payload).forEach(([key, value]) => {
    if (removeEmptyObjects && isEmptyObject(value)) {
      delete payload[key]
      return
    }
    if (removeEmptyArrays && isEmptyArray(value)) {
      delete payload[key]
      return
    }
    if (remove.includes(value)) {
      delete payload[key]
      return
    }

    if (value && isPlainObject(value)) {
      removePropInPlace(value, remove[0], ...remove.slice(1))
    }
    if (removeEmptyObjects && isEmptyObject(value)) {
      delete payload[key]
      return
    }
    if (removeEmptyArrays && isEmptyArray(value)) {
      delete payload[key]
      return
    }
  })
}

/** @deprecated Use `removeProp` instead and pass multiple parameters */
export function removeProps(
  payload: { [key in string | number | symbol]: unknown },
  valuesToRemove: unknown[],
): { [key in string | number | symbol]: unknown } {
  return removeProp(payload, valuesToRemove[0], ...valuesToRemove)
}
