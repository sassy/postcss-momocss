'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-momocss', function (opts) {
    opts = opts || {};

    return function (css) {
        // Plugin logic goes here
        css.eachDecl(function transform(decl) {
            switch (decl.value) {
                case "kanako":
                case "momota":
                    decl.value = "red";
                    break;
                case "shiori":
                case "tamai":
                    decl.value = "yellow";
                    break;
                case "ayaka":
                case "sasaki":
                    decl.value = "pink";
                    break;
                case "momoka":
                case "ariyasu":
                    decl.value = "green";
                    break;
                case "reni":
                case "takagi":
                    decl.value = "purple";
                    break;
            }
        });
    };
});
