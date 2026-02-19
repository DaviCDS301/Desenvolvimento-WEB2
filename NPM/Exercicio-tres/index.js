import chalk from "chalk";

import generateStupidName from "sillyname";

let sillyName = generateStupidName();
let SillyName = generateStupidName();
let sillyname = generateStupidName();

console.log (chalk.red (sillyName));

console.log (chalk.blue (SillyName));

console.log (chalk.green (sillyname));