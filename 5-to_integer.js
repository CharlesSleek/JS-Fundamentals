const args = process.argv.slice(2); // Get the command line arguments, excluding the first two

const firstArg = args[0];
const num = Number(firstArg); // Convert the argument to a number

console.log((num == firstArg) ? `My number: ${num}