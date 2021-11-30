// @ts-check typescript checking

// formatting -> prettier
// Linting -> ESLint

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end("Hello");
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`server port.${PORT}`);
// });

const people = [
  {
    age: 30,
    city: "1",
  },
  {
    age: 32,
    city: "2",
  },
  {
    age: 11,
    city: "3",
  },
];

function solveModern() {
  const allCities = people
    .filter((person) => person.age < 30)
    .map((person) => person.city);
  const set = new Set(allCities);
  return Array.from(set);
}

// function solveModern() {
//   const allCities = people
//     .filter(({ age }) => age < 30)
//     .map(({city}) => city);
//   const set = new Set(allCities);
//   return Array.from(set);
// }

console.log(solveModern());
