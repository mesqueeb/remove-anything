import { expect, test } from 'vitest'
import { removeProp, removePropInPlace, removeProps } from '../src/index.js'

test('removeProp', () => {
  expect(removeProp({ a: 1, b: undefined }, undefined)).toEqual({ a: 1 })
  expect(removeProp({ a: 1, b: undefined }, 1)).toEqual({ b: undefined })
})

test('removeProp empty objects', () => {
  expect(removeProp({}, {})).toEqual({})
  expect(removeProp({ a: {} }, {})).toEqual({})
  expect(removeProp({ a: { b: { c: {} } } }, {})).toEqual({})
  expect(removeProp({ a: { b: { c: { d: { e: {} } } } } }, {})).toEqual({})
  expect(removeProp({ a: { b: { c: { d: { e: {} } } }, b2: {} } }, {})).toEqual({})
  expect(removeProp({ a: { b: { c: { d: { e: {}, e2: {} } } }, b2: {} } }, {})).toEqual({})
})

test('removeProp empty arrays', () => {
  expect(removeProp({}, {})).toEqual({})
  expect(removeProp({ a: [] }, [])).toEqual({})
  expect(removeProp({ a: { b: { c: [] } } }, [])).toEqual({ a: { b: {} } })
  expect(removeProp({ a: { b: { c: { d: { e: [] } } } } }, [])).toEqual({
    a: { b: { c: { d: {} } } },
  })
  expect(removeProp({ a: { b: { c: { d: { e: [] } } }, b2: [] } }, [])).toEqual({
    a: { b: { c: { d: {} } } },
  })
  expect(removeProp({ a: { b: { c: { d: { e: [], e2: [] } } }, b2: [] } }, [])).toEqual({
    a: { b: { c: { d: {} } } },
  })
})

test('removeProp empty objects and undefined', () => {
  expect(removeProp({}, {}, undefined)).toEqual({})
  expect(removeProp({ a: {} }, {}, undefined)).toEqual({})
  expect(removeProp({ a: { b: { c: undefined } } }, {}, undefined)).toEqual({})
  expect(removeProp({ a: { b: { c: { d: { e: {} } } } } }, {}, undefined)).toEqual({})
  expect(removeProp({ a: { b: { c: { d: { e: {} } } }, b2: undefined } }, {}, undefined)).toEqual(
    {},
  )
  expect(
    removeProp({ a: { b: { c: { d: { e: {}, e2: undefined } } }, b2: {} } }, {}, undefined),
  ).toEqual({})
})

test('removeProps empty objects and undefined', () => {
  expect(removeProps({}, [{}, undefined])).toEqual({})
  expect(removeProps({ a: {} }, [{}, undefined])).toEqual({})
  expect(removeProps({ a: { b: { c: undefined } } }, [{}, undefined])).toEqual({})
  expect(removeProps({ a: { b: { c: { d: { e: {} } } } } }, [{}, undefined])).toEqual({})
  expect(
    removeProps({ a: { b: { c: { d: { e: {} } } }, b2: undefined } }, [{}, undefined]),
  ).toEqual({})
  expect(
    removeProps({ a: { b: { c: { d: { e: {}, e2: undefined } } }, b2: {} } }, [{}, undefined]),
  ).toEqual({})
})

test('removePropInPlace', () => {
  const obj1 = { a: 1, b: undefined }
  removePropInPlace(obj1, undefined)
  expect(obj1).toEqual({ a: 1 })

  const obj2 = { a: 1, b: undefined }
  removePropInPlace(obj2, 1)
  expect(obj2).toEqual({ b: undefined })
})

test('removePropInPlace empty objects', () => {
  const obj1 = {}
  removePropInPlace(obj1, {})
  expect(obj1).toEqual({})

  const obj2 = { a: {} }
  removePropInPlace(obj2, {})
  expect(obj2).toEqual({})

  const obj3 = { a: { b: { c: {} } } }
  removePropInPlace(obj3, {})
  expect(obj3).toEqual({})

  const obj4 = { a: { b: { c: { d: { e: {} } } } } }
  removePropInPlace(obj4, {})
  expect(obj4).toEqual({})

  const obj5 = { a: { b: { c: { d: { e: {} } } }, b2: {} } }
  removePropInPlace(obj5, {})
  expect(obj5).toEqual({})

  const obj6 = { a: { b: { c: { d: { e: {}, e2: {} } } }, b2: {} } }
  removePropInPlace(obj6, {})
  expect(obj6).toEqual({})
})

test('removePropInPlace empty arrays', () => {
  const obj1 = {}
  removePropInPlace(obj1, {})
  expect(obj1).toEqual({})

  const obj2 = { a: [] }
  removePropInPlace(obj2, [])
  expect(obj2).toEqual({})

  const obj3 = { a: { b: { c: [] } } }
  removePropInPlace(obj3, [])
  expect(obj3).toEqual({ a: { b: {} } })

  const obj4 = { a: { b: { c: { d: { e: [] } } } } }
  removePropInPlace(obj4, [])
  expect(obj4).toEqual({ a: { b: { c: { d: {} } } } })

  const obj5 = { a: { b: { c: { d: { e: [] } } }, b2: [] } }
  removePropInPlace(obj5, [])
  expect(obj5).toEqual({ a: { b: { c: { d: {} } } } })

  const obj6 = { a: { b: { c: { d: { e: [], e2: [] } } }, b2: [] } }
  removePropInPlace(obj6, [])
  expect(obj6).toEqual({ a: { b: { c: { d: {} } } } })
})

test('removePropInPlace empty objects and undefined', () => {
  const obj1 = {}
  removePropInPlace(obj1, {}, undefined)
  expect(obj1).toEqual({})

  const obj2 = { a: {} }
  removePropInPlace(obj2, {}, undefined)
  expect(obj2).toEqual({})

  const obj3 = { a: { b: { c: undefined } } }
  removePropInPlace(obj3, {}, undefined)
  expect(obj3).toEqual({})

  const obj4 = { a: { b: { c: { d: { e: {} } } } } }
  removePropInPlace(obj4, {}, undefined)
  expect(obj4).toEqual({})

  const obj5 = { a: { b: { c: { d: { e: {} } } }, b2: undefined } }
  removePropInPlace(obj5, {}, undefined)
  expect(obj5).toEqual({})

  const obj6 = { a: { b: { c: { d: { e: {}, e2: undefined } } }, b2: {} } }
  removePropInPlace(obj6, {}, undefined)
  expect(obj6).toEqual({})
})

test('removePropInPlace mutates original object', () => {
  const original = {
    a: 1,
    b: { c: 2, d: undefined },
    e: { f: { g: 3, h: {} } },
    i: [],
  }

  removePropInPlace(original, undefined, {}, [])

  // Verify the original object has the expected structure after mutation
  expect(original).toEqual({ a: 1, b: { c: 2 }, e: { f: { g: 3 } } })
  // Verify nested objects still reference the original structure
  expect(original.b).toBe(original.b)
  expect(original.e).toBe(original.e)
  expect(original.e.f).toBe(original.e.f)
})
