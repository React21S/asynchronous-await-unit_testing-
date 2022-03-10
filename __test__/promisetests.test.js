'use strict';

// const search = require('../carStoragePromise');
const search = require('..///carStoragePromiseVersion2');

describe('Testing with key licensce to resolve', ()=>{
    const expected = [
        {"model":"Bored T-model", "licence":"ABC-1"}
    ];

    // .then version 
    test('then syntax testing', ()=>{
        // in this version must return
        return search('licence', 'ABC-1')
        .then(data=>expect(data).toEqual(expected))
    });

    // async and await version
    test('async-await version', async()=>{
        const data = await search('licence', 'ABC-1');
        expect(data).toEqual(expected)
    });

    // resolve version
    test('resolve version', ()=>{
        return expect(search('licence', 'ABC-1'))
            .resolves.toEqual(expected)
    });

    // resolve async version 
    test('resolve async version', async()=>{
        await expect(search('licence', 'ABC-1'))
            .resolves.toEqual(expected)
    });

   

});

   // reject version 
describe('testing with key licence to reject', ()=>{
    test('catch', ()=>{
        return search().catch(data=>expect(data).toBe('parameter missing'))
    });

    test('async-await', async()=>{
        try{
            await search();
        }
        catch (err){
            expect(err).toBe('parameter missing')
        }
    });

    // reject without async
    test('rejects', ()=>{
        return expect(search()).rejects.toBe('parameter missing')
    });

     // reject with async
    test('rejects with async-await', async()=>{
        await expect(search()).rejects.toBe('parameter missing')
    });
});

describe('testing model', ()=>{
    test('search model "Bored T-model"', ()=>{
        return expect(search('model', "Bored T-model")).resolves.toEqual([
            {"model":"Bored T-model", "licence":"ABC-1"},
            {"model":"Bored T-model", "licence":"GFT-10"},
        ]);
    });

    test('parameter missing', ()=>{
        return expect(search('model')).rejects.toBe('parameter missing');
    });
})