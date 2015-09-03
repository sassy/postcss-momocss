# [postcss][postcss]-momocss
[![Build Status](https://travis-ci.org/sassy/postcss-momocss.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-momocss.svg)][npm] [![Dependency Status](https://gemnasium.com/sassy/postcss-momocss.svg)][deps]

> Transform CSS with PostCSS.

momoclo name represent color value.

<table>
<tr>
    <th>member</th><th>value</th>
</tr>
<tr>
    <td>kanako</td><td>red</td>
</tr>
<tr>
    <td>shiori</td><td>yellow</td>
</tr>
<tr>
    <td>ayaka</td><td>pink</td>
</tr>
<tr>
    <td>momoka</td><td>green</td>
</tr>
<tr>
    <td>reni</td><td>purple</td>
</tr>
</table>

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
