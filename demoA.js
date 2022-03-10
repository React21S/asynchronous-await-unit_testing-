'use strict';

// This is synchronous operation here
const search = require('./carstorageNoFile');

console.log(search());
console.log('one');
console.log(search('model', 'Nova'));
console.log('two');
console.log(search('licence', 'ABC-1'));
console.log('three');