import { test, expect } from 'vitest'
import { removeProp, removeProps } from '../src/index'

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
test('removeProp empty objects and undefined', () => {
  expect(removeProps({}, [{}, undefined])).toEqual({})
  expect(removeProps({ a: {} }, [{}, undefined])).toEqual({})
  expect(removeProps({ a: { b: { c: undefined } } }, [{}, undefined])).toEqual({})
  expect(removeProps({ a: { b: { c: { d: { e: {} } } } } }, [{}, undefined])).toEqual({})
  expect(
    removeProps({ a: { b: { c: { d: { e: {} } } }, b2: undefined } }, [{}, undefined])
  ).toEqual({})
  expect(
    removeProps({ a: { b: { c: { d: { e: {}, e2: undefined } } }, b2: {} } }, [{}, undefined])
  ).toEqual({})
})