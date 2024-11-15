# Cyrl2lat
[![npm.badge]][npm]
[![MIT][license.badge]][license]

A simple and efficient package for transliterating Russian (Cyrillic) text to English (Latin) characters. Ideal for converting Russian text into a readable Latin alphabet form, suitable for use in URLs, file names, or just to make Cyrillic text more accessible in English.

## Install

```sh
npm install cyrl2lat
```

## Usage

To convert **Ru** to **Latin**

```js
import { transliterate } from 'cyrl2lat'

const text = 'Привет'
const result = transliterate(text)
console.log(result)
```

[npm]: https://www.npmjs.com/package/cyrl2lat
[npm.badge]: https://img.shields.io/npm/v/cyrl2lat
[license.badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: ./LICENSE
