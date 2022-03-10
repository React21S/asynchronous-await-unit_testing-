'use strict';

const fs = require('fs');
const storageFile = './cars.json'

// cbf is a callback function
module.exports = (cbf,key,value)=>{
    fs.readFile(storageFile, 'utf8', (err,data)=>{

        if(err){
            cbf (err);
        }else{
            const cars = JSON.parse(data)
        let found = [];
   
        if(key && value){
            for(let car of cars){
                if (car[key]===value){
                    found.push(car);
                }
            }
        }else{
            found= cars;
        }
        cbf (found);
        }
        
    });
}