/** program named 1-stdin.js that will be executed. */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('Data', (Data) => {
    process.stdout.write(`Your name is: ${Data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('Data', (Data) => {
    process.stdout.write(`Your name is: ${Data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
