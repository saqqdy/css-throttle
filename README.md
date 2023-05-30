<div style="text-align: center;" align="center">

# css-throttle

A high-performance solution using css to prevent button double-clicking.

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Installing

```bash
# use pnpm
$ pnpm install css-throttle

# use npm
$ npm install css-throttle --save

# use yarn
$ yarn add css-throttle
```

## Usage

### General use

step 1: import the styles

```ts
// use import
import 'css-throttle'
// or use require
require('css-throttle')
```

Import less file or scss file

```ts
// less
import 'css-throttle/less'
// scss
import 'css-throttle/scss'
```

step 2: Add a className "throttle" to the dom that needs to use throttling

```html
<button onclick="console.log('common save')">I am a "common" save</button>
<button class="throttle" onclick="console.log('throttle save')">I am a "throttle" save</button>
```

### Use css variables to define the transparency of the motion time and inactive state

```css
:root {
    --css-throttle-delay: 2s;
    --css-throttle-opacity: 0.65;
}
```

### Using unpkg CDN

```html
<!-- head -->
<script src="https://unpkg.com/css-throttle@1.0.0/src/index.css"></script>
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/css-throttle/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/css-throttle.svg?style=flat-square
[npm-url]: https://npmjs.org/package/css-throttle
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/css-throttle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/css-throttle&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/css-throttle.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/css-throttle?branch=master
[download-image]: https://img.shields.io/npm/dm/css-throttle.svg?style=flat-square
[download-url]: https://npmjs.org/package/css-throttle
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_css-throttle
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_css-throttle
