// ES6 MODULE
import sum from './sum';

// CommonJS Module
var minus = require('./minus');

// AMD
require(['./multiple'], function(multiple) {
    console.log('multiple(2, 3) = ' + multiple(2, 3))
})

console.log('sum(23, 24) = ' + sum(23, 24));
console.log('minus(224, 24) = ' + minus(224, 24));