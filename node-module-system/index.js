// getting started with node js
// console.log('This is Node Js Tutorial');
// console.log('My name is Dev Mehta');
// console.log('Jabba Jabba');
// Process.exit(0);
// process.exitCode = 1;



// const {tesla, ford} = require('./car');
// console.log(JSON.stringify(tesla, null, 2));
// console.log(JSON.stringify(ford, undefined, 5));


const fs = require('fs');

// synchronous method

const files = fs.readdirSync('./');
// console.log(files);


// asyncronous method

// fs.readdir('./', function (err, files) {
//     if (err) console.log(err);
//     else console.log(files);
// });

// Event Module
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function () {
//     console.log('Listener called');
// });

// // Raise an event
// emitter.emit('messageLogged');


//HTTP Module
const http = require('http');

//using http module to create a server using socket

// const server = http.createServer();
// server.on('connection', (socket) => {
//     console.log('New connection');
// });
// server.listen(3000);


const server = http.createServer((req, res) => { 
    if(req.url === '/') {
        res.write('Hello world');
        res.end();
    }
});
server.listen(3000);



