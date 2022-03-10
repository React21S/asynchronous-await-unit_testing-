# AsynchronousTesting 

Documentation: (https://jestjs.io/)

## 1.   Create a project folder

## 2. Create package.json (with npm init or manually)
```shell
> npm init -y
```

```shell
> npm init
```


and answer questions

## 3. Install jest as devDependency 

```shell
> npm install jest --save-dev
```

This modifies the package.json file by adding devDependencies to it
```json
 "devDependencies": {
    "jest": "^27.4.7"
  }
```

## 4. Modify the test-script in package.json change the script from
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
to

 "scripts": {
    "test": "jest"
  },
```

## Asynchronous test for cars storage API
- Cars API for asynchronous can be found [here](/carStorageAPI.md)

## 5. Create test folder named 
(underscore underscore tests underscore underscore )
`__tests__`

## 6. Write tests

## 7. Run tests
```shell
> npm test
```

## 7B. To run only one test file
- test all file that have name test in it
```shell
> npm test --testFile promisetests.test.js
```

or

```shell
> npm test --testFile carStorage.test.js
```


## For getting carstorageNoFile result 
- on your terminal 

```shell
> node demoA.js
```

## For getting carstorageNoWorkingFile result 
- on your terminal 

```shell
> node demoB.js
```

## For getting carStorageCallback result 
- on your terminal 

```shell
> node demoCallback.js
```

## For getting carStorageCallbackLast result 
- on your terminal 

```shell
> node demoCallbackLast.js
```

## For getting carStoragePromise demo result 
- on your terminal 

```shell
> node demoPromise.js
```

---
## Result 

![Result](/img/Result.png)