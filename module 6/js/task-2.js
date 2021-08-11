import users from "./user.js";

console.log(users);

console.log("--------Task2---------");

const getUsersWithEyeColor = users.filter(function (users) {
  return users.eyeColor === "blue";
});

console.log(getUsersWithEyeColor);
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
