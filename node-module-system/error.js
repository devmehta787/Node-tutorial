


const error = new Error('This is an error message');

// console.log(error.stack);
// console.log("hello");
// console.log(error);
// console.log("hello");
// console.log(error.message);

// throw new Error('I am an error');

const { CustomError } = require('./CustomError');

// const customError = new CustomError('This is a custom error message');
// console.log(customError);

// throw new CustomError('This is a custom error message');

// handle exception using try and catch

// try {
//     doSomething();
// } catch (err) {
//     console.log("Error caught");
//     console.log(err);
// }

function doSomething() {
    // const data = fetch("localhost:3000");
    console.log("I am doing something");
}

// Uncaught exceptions

process.on('uncaughtException', (err) => { 
    console.log("Uncaught exception");
    // console.log(err);
    process.exit(1);
});

doSomething();

// Exceptions in promises
const promise = new Promise((resolve, reject) => { 
    if (false) {
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log("Error caught");
    console.log(err);
});

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);