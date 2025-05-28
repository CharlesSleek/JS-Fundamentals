const arg = process.argv[2]; // Get the first argument from the command line
const number = Number(arg); // Try to convert it to a number

if (!isNaN(number)) {
  console.log("My number:", number);
} else {
  console.log("Not a number");
}
