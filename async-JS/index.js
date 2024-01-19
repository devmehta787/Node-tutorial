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

// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');

// function getUser(id) {
//     setTimeout(() => {
//         console.log('Reading user from database...');
//         return { id: id, gitHubUsername: 'devmehta787' };
//     }, 2000);
//     // return 1;
// }




// callback

// console.log('Before');
// getUser(1, (user) => {
//     console.log('User', user);
//     // get the repos
//     getRepo(user.gitHubUsername, (repos) => {
//         console.log('Repos', repos);
//     });
// });

// // getRepo(user, (repos) => {
// //     console.log('Repos', repos);
// // });
// console.log('After');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading user from database...');
//         callback({ id: id, gitHubUsername: 'devmehta787' });
//     }, 2000);
// }

// // convert this sync to async function

// // function getRepo(username) {
// //     return ['repo1', 'repo2', 'repo3'];
// // }



// function getRepo(username, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub API...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }


// named functions

console.log('Before');
getUser(1, getRepo);
console.log('After');


function getRepo(user) {
    getRepo(user.gitHubUsername, getCommits);
}
function getCommits(repos) {
    getCommits(repo, displayCommits);
}
function displayCommits(commits) { 
    console.log(commits);
}



function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({ id: id, gitHubUsername: 'devmehta787' });
    }, 2000);
}
function getRepo(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
function getCommits(repo, callback) { 
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}


// promises