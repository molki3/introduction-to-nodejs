/*
ASYNC AWAIT

Execute: 13-async-await.js

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

// getText('./7-data/first.txt')
//     .then(result => console.log(result))
//     .then(() => getText('./7-data/second.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

/* ASYNC WAY */
async function read(){
    try{
        //throw new Error('Error created');
        const result = await getText('./7-data/first.txt');
        const result2 = await getText('./7-data/second.txt');
        const result3 = await getText('./7-data/third.txt');
        console.log(result);
        console.log(result2);
        console.log(result3);
    } catch(error){
        console.log(error)
    }
}

read();
