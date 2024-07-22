/*
OS MODULE
Execute: node 5-os.js 
*/

const os = require('os');


/*Extract user info */
console.log(os.userInfo())

/*Extract time since the PC has been turned on */
console.log(os.uptime())

/*Extract operative system*/
console.log(os.platform())

/*Extract total memory*/
console.log(os.totalmem())

/*Extract free memory*/
console.log(os.freemem())

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})