import user from "./user.js";
console.log(user);

console.log("--------Task7---------");

const calculateTotalBalance = user.reduce(function (acc, users) {
  return (acc += users.balance);
}, 0);

console.log(calculateTotalBalance); // 20916
