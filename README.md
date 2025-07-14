# Remove Anything ✂️

<a href="https://www.npmjs.com/package/remove-anything"><img src="https://img.shields.io/npm/v/remove-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/remove-anything"><img src="https://img.shields.io/npm/dw/remove-anything.svg" alt="Latest Stable Version"></a>

```
npm i remove-anything
```

Removes props (eg. undefined) from an object

An optimised way to remove any prop value (eg. `undefined`, empty objects, ...) from an object. A small and simple integration.

## Usage

```js
import { removeProp } from 'remove-anything'

const payload = { a: 1, b: undefined }
const noUndefined = removeProp(payload, undefined)

noUndefined // { a: 1 }

const payload = { a: 1, b: undefined }
const no1 = removeProp(payload, 1)

no1 // { b: undefined }
```

### Remove multiple props

You can keep on passing parameters to remove additional props

```js
const payload = { a: 1, b: undefined }
removeProp(payload, 1, undefined)

// returns
// {}
```

### Remove Empty Objects and Arrays

```js
const payload = { a: 1, b: undefined, c: {}, d: [] }
removeProps(payload, {}, [])

// returns
// { a: 1, b: undefined }
```

### In-Place Mutation

Use `removePropInPlace` to mutate the original object instead of creating a new one:

```js
const payload = { a: 1, b: undefined, c: {} }
removePropInPlace(payload, undefined, {})

// payload is now mutated to: { a: 1 }
```

## Meet the family (more tiny utils with TS support)

- [is-what 🙉](https://github.com/mesqueeb/is-what)
- [is-where 🙈](https://github.com/mesqueeb/is-where)
- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [check-anything 👁](https://github.com/mesqueeb/check-anything)
- [remove-anything ✂️](https://github.com/mesqueeb/remove-anything)
- [getorset-anything 🐊](https://github.com/mesqueeb/getorset-anything)
- [map-anything 🗺](https://github.com/mesqueeb/map-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [case-anything 🐫](https://github.com/mesqueeb/case-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [nestify-anything 🧅](https://github.com/mesqueeb/nestify-anything)
