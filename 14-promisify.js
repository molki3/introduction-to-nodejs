/*
PROMISIFY
It is a node module simplify of promise + async await

Execute: 14-promisify.js

*/

const {readFile} = require('fs');
const {promisify} = require('util');


const readFileAsync = promisify(readFile);

async function read(){
    try{
        const result1 = await readFileAsync('./7-data/first.txt');
        console.log(result1.toString());
    }catch(error){
        console.log(error)
    }
}

read();