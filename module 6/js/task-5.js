import users from "./user.js";
console.log(users);

console.log("--------Task5---------");

const getUserWithEmail = (users, email) =>
  // твій код
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {об'єкт користувача Elma Head}
