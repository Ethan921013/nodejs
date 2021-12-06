// @ts-check

// new Promise((resolve, reject) => {
//   console.log("Inside promise");
//   reject(new Error("First reject"));
//   resolve("First resolve");
// })
//   .then((value) => {
//     console.log("inside first then");
//     console.log("value", value);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

new Promise((resolve, reject) => {
  console.log("before timeout");
  setTimeout(() => {
    resolve(Math.random());
    console.log("after timeout");
  }, 1000);
})
  .then((value) => {
    console.log("then1");
    console.log("value", value);
  })
  .then(() => {
    console.log("then2");
  });
