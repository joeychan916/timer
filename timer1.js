const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const input = args[i];
  const delay = parseInt(input);

  if (isNaN(delay) || delay <= 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay * 1000);
}
