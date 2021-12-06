// @ts-check

const fs = require("fs");

// fs.readFile(".gitignore", "utf-8", (error, value) => {
//   console.log(value);
// });

function readFilePromise(filename) {
  return new Promise((res, rej) => {
    fs.readFile(".gitignore", "utf-8", (error, value) => {
      if (error) {
        rej(error);
      }
      res(value);
    });
  });
}

readFilePromise(".gitignore").then((value) => {
  console.log(value);
});
