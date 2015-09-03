var test = require('tape');
var postcss = require('postcss');
var plugin = require('./');
var name = require('./package.json').name;

var tests = [{
    message: 'should transform kanako',
    fixture: 'h1 { color: kanako }',
    expected: 'h1 { color: red }',
    options: {foo: true}
},
{
    message: 'should transform shiori',
    fixture: 'h1 { color: shiori }',
    expected: 'h1 { color: yellow }',
    options: {foo: true}
},
{
    message: 'should transform ayaka',
    fixture: 'h1 { color: ayaka }',
    expected: 'h1 { color: pink }',
    options: {foo: true}
},
{
    message: 'should transform momoka',
    fixture: 'h1 { color: momoka }',
    expected: 'h1 { color: green }',
    options: {foo: true}
},
{
    message: 'should transform reni',
    fixture: 'h1 { color: reni }',
    expected: 'h1 { color: purple }',
    options: {foo: true}
}];

function process (css, options) {
    return postcss(plugin(options)).process(css).css;
}

test(name, function (t) {
    t.plan(tests.length);

    tests.forEach(function (test) {
        var options = test.options || {};
        t.equal(process(test.fixture, options), test.expected, test.message);
    });
});

test('should use the postcss plugin api', function (t) {
    t.plan(2);
    t.ok(plugin().postcssVersion, 'should be able to access version');
    t.equal(plugin().postcssPlugin, name, 'should be able to access name');
});
