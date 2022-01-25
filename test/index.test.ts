import { test, expect } from 'vitest'
import { removeProp, removeProps } from '../src/index'

test('removeProp', () => {
  t.deepEqual(removeProp({ a: 1, b: undefined }, undefined), { a: 1 } as any)
  t.deepEqual(removeProp({ a: 1, b: undefined }, 1), { b: undefined } as any)
})
test('removeProp empty objects', () => {
  t.deepEqual(removeProp({}, {}), {})
  t.deepEqual(removeProp({ a: {} }, {}), {} as any)
  t.deepEqual(removeProp({ a: { b: { c: {} } } }, {}), {} as any)
  t.deepEqual(removeProp({ a: { b: { c: { d: { e: {} } } } } }, {}), {} as any)
  t.deepEqual(removeProp({ a: { b: { c: { d: { e: {} } } }, b2: {} } }, {}), {} as any)
  t.deepEqual(removeProp({ a: { b: { c: { d: { e: {}, e2: {} } } }, b2: {} } }, {}), {} as any)
})
test('removeProp empty objects and undefined', () => {
  t.deepEqual(removeProps({}, [{}, undefined]), {})
  t.deepEqual(removeProps({ a: {} }, [{}, undefined]), {} as any)
  t.deepEqual(removeProps({ a: { b: { c: undefined } } }, [{}, undefined]), {} as any)
  t.deepEqual(removeProps({ a: { b: { c: { d: { e: {} } } } } }, [{}, undefined]), {} as any)
  t.deepEqual(
    removeProps({ a: { b: { c: { d: { e: {} } } }, b2: undefined } }, [{}, undefined]),
    {} as any
  )
  t.deepEqual(
    removeProps({ a: { b: { c: { d: { e: {}, e2: undefined } } }, b2: {} } }, [{}, undefined]),
    {} as any
  )
})
