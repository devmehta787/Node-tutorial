// getting started with node js
// console.log('This is Node Js Tutorial');
// console.log('My name is Dev Mehta');
// console.log('Jabba Jabba');
// Process.exit(0);
// process.exitCode = 1;



const {tesla, ford} = require('./car');
console.log(JSON.stringify(tesla, null, 2));
console.log(JSON.stringify(ford, undefined, 5));