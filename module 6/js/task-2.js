import users from "./user.js";

console.log(users);

console.log("--------Task2---------");

const getUsersWithEyeColor = (users, color) =>
  // твій код
  users.filter((user) => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue"));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
