import users from "./user.js";
console.log(users);

console.log("--------Task9---------");

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
