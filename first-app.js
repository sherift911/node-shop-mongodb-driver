// const person = {
//   name: "max",
//   age: 29,
//   greet() {
//     console.log(`hello ${this.name}`);
//   },
// };

// const printName = ({ name }) => {
//   console.log(name);
// };

// // printName(person);
// //destructuring
// const { name, age } = person;

// console.log(name, age);
// const hobbies = ["sports", "cooking"];

// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// console.log("sherif");
// console.log("hi");

// const fetchData = (callback) => {
//   const promise = new Promise();
//   setTimeout(() => {
//     callback("done");
//   }, 2000);
// };

// setTimeout(() => {
//   console.log("hello");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);
const promise = new Promise((resolve, reject) => {
  const pizzaReady = false;
  if (pizzaReady) {
    resolve("your pizza is ready");
  } else {
    reject("your pizza not ready");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
