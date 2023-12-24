const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your name? ', (name) => {
//     console.log(`Welcome ${name}`);
//     rl.question('What is your profession? ', (profession) => {
//         console.log(`${name} is a ${profession}`);
//         rl.question('What is your course? ', (course) => {
//             console.log(`${name} is a ${profession} and is studying ${course}`);
//             rl.close();
//         });
//     });
// });


const prompt = require('prompt-sync')();

const name = prompt('what is your name?');
console.log(`Welcome ${name}`);