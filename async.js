async function sleep(duration) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(undefined);
    }, duration);
  });
}

async function main() {
  console.log("first");
  await sleep(1000);
  console.log("second");
  await sleep(1000);
  console.log("third");
  await sleep(1000);
}

main();
