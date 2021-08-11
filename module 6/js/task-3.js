import users from "./user.js";
console.log(users);

console.log("--------Task3---------");

// const getUsersWithGender = (users, gender) => {
//   // твій код
//   users.filter((user) => user.gender === gender);
// };

// console.log(getUsersWithGender(users, "male"));
// // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender);

console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
