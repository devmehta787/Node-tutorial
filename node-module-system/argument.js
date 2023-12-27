console.log(process.argv);

console.log(process.argv[2]);
console.log(process.argv.slice(2)[0]);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});