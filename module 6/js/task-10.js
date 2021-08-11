import users from "./user.js";
console.log(users);

console.log("--------Task10---------");

const getSortedUniqueSkills = (users) => {
  return users
    .reduce(function (acc, user) {
      return [...acc, ...user.skills];
    }, [])
    .reduce(function (acc, skill) {
      // console.log(acc);
      if (acc.includes(skill)) {
        return acc;
      }
      return [...acc, skill];
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
