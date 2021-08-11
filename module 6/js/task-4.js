import users from "./user.js";
console.log(users);

console.log("--------Task4---------");

const getInactiveUsers = users.filter(function (user) {
  return !user.isActive;
});
console.log(getInactiveUsers);
// [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
