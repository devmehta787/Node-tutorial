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
//         // get the commits
//         getCommits(repos[0], (commits) => {
//             console.log('Commits', commits);
//             // callback hell
//         });
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

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub API...');
//         callback(['commit1', 'commit2', 'commit3']);
//     }, 2000);

// }


// named functions

// console.log('Before');
// getUser(1, getRepo);
// console.log('After');


// function getRepo(user) {
//     getRepos(user.gitHubUsername, getCommits);
// }

// function getCommits(repos) {
//     getCommits(repos[0], displayCommits);
// }

// function displayCommits(commits) {
//     console.log(commits);
// }

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading user from database...');
//         callback({ id: id, gitHubUsername: 'devmehta787' });
//     }, 2000);
// }

// function getRepos(username, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub API for repos...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

// function getCommits(repo, callback) { 
//     setTimeout(() => {
//         console.log('Calling GitHub API for commits...');
//         callback(['commit1', 'commit2', 'commit3']);
//     }, 2000);

// }



// promises

// console.log('Before');
// getUser(1, (user) => {
    //     getRepo(user.gitHubUsername, (repos) => {
        //         getCommits(repos[0], (commits) => {
            //             console.log('Commits', commits);
            //         });
            //     });
            // });
            
            // const p = getUser(1);
            // p.then(user => console.log(user))
            //     .catch(err => console.log('Error', err.message));         
// console.log('After');
            
// console.log('Before');
// getUser(1)
// .then(user => getRepo(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));


// console.log('After');





// Async and Await

async function displayCommits() {
    try {
        const user = await getUser(1);
        console.log(user);
        const repos = await getRepo(user.gitHubUsername);
        console.log(repos);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }catch(err) {
        console.log('Error', err.message);
    }
}
displayCommits();


function getUser(id) {
    return new Promise((resolve, reject) => { 
        // kick off some async work
        setTimeout(() => {
            console.log('Reading user from database...');
            resolve({ id: id, gitHubUsername: 'devmehta787' });
            reject(new Error('Could not get user'));
        }, 2000);
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API for repos...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    
    });
}


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API for commits...');
            resolve(['commit1', 'commit2', 'commit3']);
            // reject(new Error('Could not get commits'));
        }, 2000);
    });
}



