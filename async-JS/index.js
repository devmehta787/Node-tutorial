// sync async code

// console.log('start');
// setTimeout(() => {
//     console.log('Reading user from database...');
// }, 3000);
// console.log('start 2');


// patterns for dealing with async code

// callbacks
// promises
// async/await

console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) { 
    setTimeout(() => {
        console.log('Reading user from database...');
        return { id: id, gitHubUsername: 'mosh' };
    }, 2000);
    // return 1;
}