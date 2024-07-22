/*
ECMASCRIPT MODULES: IMPORT EXPORT:

package.json: |"type": "module"| for import and export

export: ./4-modules/18-math.js
import: here
*/

import /* the object-> */ math, /* or individual functions-> */ {add, subtract, multiply, divide} from './4-modules/18-math.js'


console.log(math.add(14, 6));