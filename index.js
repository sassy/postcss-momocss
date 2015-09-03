'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-momocss', function (opts) {
    opts = opts || {};

    return function (css) {
        // Plugin logic goes here
        css.eachDecl(function transform(decl) {
            switch (decl.value) {
                case "kanako":
                    decl.value = "red";
                    break;
                case "shiori":
                    decl.value = "yellow";
                    break;
                case "ayaka":
                    decl.value = "pink";
                    break;
                case "momoka":
                    decl.value = "green";
                    break;
                case "reni":
                    decl.value = "purple";
                    break;
            }
        });
    };
});
