const args = process.argv.slice(2); // Get the command line arguments, excluding the first two

console.log(args[0] ? args[0] : "No argument");