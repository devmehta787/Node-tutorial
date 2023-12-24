const x = "1";
const y = "2";

const sum = x + y;
console.log(sum);
console.log(x, y);


// format specifier
console.log("My name is %s and my age is %d", "Dev", 23);
// console.clear();

console.count("My name is %s and my age is %d", "Dev", 23);
console.count("My name is %s and my age is %d", "Dev", 23);
console.count("My name is %s and my age is %d", "Jabba", 27);
console.countReset("My name is %s and my age is %d", "Dev", 23);
console.count("My name is %s and my age is %d", "Dev", 23);


// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();


const sum1 = () => console.log(`The sum of 2 and 4 is: ${2 + 4}`);
const multiply = () => console.log(`The multiplication of 2 and 4 is: ${2 * 4}`);

const measureTime = () => {
    console.time("sum()");
    sum1();
    console.timeEnd("sum()");

    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
}
measureTime();


const progressBar = require('progress');
const bar = new progressBar('Downloading: [:bar] :rate/bps :percent :etas', { total: 10 });

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);

const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));