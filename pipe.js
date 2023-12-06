let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

rl.on('line', (line) => {
    console.log(`Received:`, line.split(" ").reduce((sum, b) => sum + +b, 0));
});

// Run the program
// node pipe.js
// then provide int inputs separated by space \n for new line
// 1 2 3 4 5 6 7 8 9 10
// view the output to the console
