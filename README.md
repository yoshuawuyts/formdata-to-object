# formdata-to-object [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Convert a formData object or form DOM node to a KV object.

Generally you don't want to use this method, but attach a `onchange` listener
to each input element instead. Useful in certain situations tho.

## Usage

```js
var toObject = require('formdata-to-object')
var html = require('bel')

document.body.appendChild(html`
  <form>
    <input type="text" name="name">
    <input type="password" name="password">
    <input type="submit" value="Login">
  </form>
`)

var form = document.querySelector('form')
var data = toObject(form)
console.log(data)
```

## API
### `data = toObject(FormData|formElement)`
Convert a [window.FormData object](http://devdocs.io/dom/formdata) or form
element to an object.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/formdata-to-object.svg?style=flat-square
[3]: https://npmjs.org/package/formdata-to-object
[4]: https://img.shields.io/travis/yoshuawuyts/formdata-to-object/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/formdata-to-object
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/formdata-to-object/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/formdata-to-object
[8]: http://img.shields.io/npm/dm/formdata-to-object.svg?style=flat-square
[9]: https://npmjs.org/package/formdata-to-object
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
