'use strict';

// This is call back function 
const search = require('./carStorageCallback');

search(console.log);
console.log('one');
search(console.log,'model', 'Nova');
console.log('two');
search(data=>console.log(data),'licence', 'ABC-1');
console.log('three');
search(printData, 'model', 'Nova')

function printData(data){
    console.log('###########');
    console.log(data);
    console.log('###########');
}