/*
PROMISE
It is a function that receive the result from another function

Execute: 12-promise.js

*/

const {readFile} = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path,'utf-8', (err, data) => {
            if(err) reject(err);
            else resolve(data);
        })
    })
}

getText('./7-data/first.txt')
    .then(result => console.log(result))
    .then(() => getText('./7-data/second.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error));