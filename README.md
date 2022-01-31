# replace-deferred-object-with-async-await
This repo demonstrates code changes required to replace jQuery's deferred object with ES6 async await.

## Installation
Download the zip file of the code.

Extract the folder from the zip file and execute following command in the folder

```
npm install
```

## Generating the code
Execute following command

```
npm run serve
```

## Running the code
Hit this url in browser: [http://localhost:1234](http://localhost:1234)


## Things to remember
Refer following table and use alternative callback apis mentioned under 2nd column.

| jQuery Deferred object  | Promise object with async-await |
| ----------------------- | ------------------------------- |
| then, done              | then                            |
| catch, fail             | catch                           |
| always                  | finally                         |
| resolve                 | resolve                         |
| reject                  | reject                          |
