'use strict';

const search = require('./carStorageCallbackLast');

try {
    search('model', 'Nova', console.log)
    search()
}
catch (err){
    console.log(err.message)
}

search('licence', 'ABC-1', console.log);

