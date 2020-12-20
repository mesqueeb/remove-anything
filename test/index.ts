import test from 'ava'
import { removeProp } from '../src/index'

test('removeProp', t => {
	t.deepEqual(
		{ a: 1 } as any,
		removeProp({ a: 1, b: undefined }, undefined)
	)
	t.deepEqual(
		{ b: undefined } as any,
		removeProp({ a: 1, b: undefined }, 1)
	)
})
