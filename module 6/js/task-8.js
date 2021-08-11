import users from "./user.js";
console.log(users);

console.log("--------Task8---------");

const getUsersWithFriend = (users, friendName) => {
  // твій код

  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Elma Head', 'Sheree Anthony' ]
