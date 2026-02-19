import chalk from "chalk";
import generateStupidName from "sillyname";

let SillyName = generateStupidName();
let Sillyname = generateStupidName();
let sillyName = generateStupidName();


console.log(chalk.red ("Nome:"));
console.log(chalk.red (SillyName));
console.log(chalk.red ("Personagem gerado com sucesso!"));

console.log(chalk.green ("Nome:"));
console.log(chalk.green  (Sillyname));
console.log(chalk.green ("Personagem gerado com sucesso!"));

console.log( chalk.blue ("Nome:"));
console.log(chalk.blue (sillyName));
console.log(chalk.blue ("Personagem gerado com sucesso!"));

