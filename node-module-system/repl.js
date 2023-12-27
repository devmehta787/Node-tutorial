//read evaluate print loop
const repl = require('repl');

// start the repl
const local = repl.start("$");

// on exiting the repl print this
local.on('exit', () => {
    console.log('The node console exited');
    process.exit();
});