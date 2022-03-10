# CarStorage API

## cars.json
```json
[
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Nova", "licence":"XYZ-123"},
    {"model":"Bored T-model", "licence":"GFT-10"},
    {"model":"XGT", "licence":"B-1"}
]
```
## **search(key,value)**

- Function returns an array of cars matching the given criterion. 
- If no match, empty array is returned.
- if parameters are missing, returns all cars in an array.

Parameters
key: `'model' or 'licence'`
value: value to be search 


## Example
```js
search('model', 'Nova')
```
