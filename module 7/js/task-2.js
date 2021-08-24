console.log("------task2--------");

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ul = document.querySelector("#ingredients");

const liIngredients = [];

ingredients.forEach((name) => {
  const li = document.createElement("li");
  li.insertAdjacentHTML("afterbegin", name);
  liIngredients.push(li);
});
console.log(liIngredients);
ul.append(...liIngredients);

///
