# Remove Anything ✂️

<a href="https://www.npmjs.com/package/remove-anything"><img src="https://img.shields.io/npm/v/remove-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/remove-anything"><img src="https://img.shields.io/npm/dw/remove-anything.svg" alt="Latest Stable Version"></a>

```
npm i remove-anything
```

Removes props (eg. undefined) from an object

An optimised way to remove any prop (eg. `undefined`) from an object. A small and simple integration.

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

## Meet the family

- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [is-what 🙉](https://github.com/mesqueeb/is-what)

