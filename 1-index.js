/*
NODE
Execute: node 1-index.js 
*/

let user = {
    name: "Manuel",
    edad: 21,
    pos: "estudiante",
  };
  
  if (user.edad < 18) {
    console.log("Eres menor de edad");
  } else if (user.edad >= 18) {
    console.log("Eres un adulto");
  }
  
  for (let a in user) {
    console.log(a);
  }