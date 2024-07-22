/*
PATH MODULE: Manage paths
Execute: node 6-path.js
*/

const path = require('path');


/*Join: Join rutes */
const filePath = path.join('public', 'project', 'shop2', 'main.js')

/*Basename: Return the base file/directory */
console.log('Basename: ', path.basename(filePath));

/*Dirname: Return the path without the basename (file/directory) */
console.log('Dirname: ', path.dirname(filePath));

/*Parse: Return the path in a object format */
console.log('Parse: ', path.parse(filePath));

/*Resolve: Return the try to complete path from the disk/home */
console.log('Resolve: ', path.resolve(filePath));