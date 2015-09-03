# [postcss][postcss]-momocss
[![Build Status](https://travis-ci.org/sassy/postcss-momocss.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-momocss.svg)][npm] [![Dependency Status](https://gemnasium.com/sassy/postcss-momocss.svg)][deps]

> Transform CSS with PostCSS.

momoclo name represent color value.



|name|value|
|--|--|
|kanako|red|
|shiori|yellow|
|ayaka|pink|
|momoka|green|
|reni|purple|


## Install

With [npm](https://npmjs.org/package/postcss-momocss) do:

```
npm install postcss-momocss --save
```

## Example

### Input

```css
h1 {
    color: kanako;
}
```

### Output

```css
h1{color:red}
```

## API

### momocss([options])

#### options
<!--
##### foo

Type: `boolean`
Default: `true`

Description of what it does. An example:

```js
var css = 'h1 { color: red }';
console.log(postcss([ require('postcss-momocss')({foo: true}) ]).process(css).css);

// => 'h1{color:red}'
```-->

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Satoshi Watanabe](https://github.com/sassy/momocss)

[ci]:      https://travis-ci.org/sassy/postcss-momocss
[deps]:    https://gemnasium.com/sassy/postcss-momocss
[npm]:     http://badge.fury.io/js/postcss-momocss
[postcss]: https://github.com/postcss/postcss
