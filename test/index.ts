import test from 'ava'
import { removeEmptyObjects, removeProp } from '../src/index'

test('removeProp', (t) => {
  t.deepEqual(removeProp({ a: 1, b: undefined }, undefined), { a: 1 } as any)
  t.deepEqual(removeProp({ a: 1, b: undefined }, 1), { b: undefined } as any)
})
test('removeProp empty objects', (t) => {
  t.deepEqual(removeEmptyObjects({}), {})
  t.deepEqual(removeEmptyObjects({ a: {} }), {})
  t.deepEqual(removeEmptyObjects({ a: { b: { c: {} } } }), {})
  t.deepEqual(removeEmptyObjects({ a: { b: { c: { d: { e: {} } } } } }), {})
  t.deepEqual(removeEmptyObjects({ a: { b: { c: { d: { e: {} } } }, b2: {} } }), {})
  t.deepEqual(removeEmptyObjects({ a: { b: { c: { d: { e: {}, e2: {} } } }, b2: {} } }), {})
})
