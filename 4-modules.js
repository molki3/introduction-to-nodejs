/*
REQUIRE: Import modules
Execute: node 4-modules.js
*/

/**
CODE 1
const links = require('./4-modules/4-myModule');
console.log(links);
*/

/*
Another way to require:
const {webname, link} = require('./modules/myModule');
*/

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Hello, What is your name? ', (name) => {
  console.log(`Hello, ${name}`);

  rl.close();
});
