console.log("------task2--------");

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredient = document.querySelector("#ingredients");
console.log(ingredient);

const ingredients_li = document.createElement("li");
ingredients_li.textContent = "Картопля";
// console.log(ingredients_li);

const clone = ingredients_li.cloneNode(true);
clone.textContent = "Гриби";

// ingredient.append(ingredients_li, clone);

const clone2 = clone.cloneNode(true);
clone2.textContent = "Часник";

const clone3 = clone2.cloneNode(true);
clone3.textContent = "Помідори";

const clone4 = clone3.cloneNode(true);
clone4.textContent = "Зелень";

const clone5 = clone4.cloneNode(true);
clone5.textContent = "Приправи";

ingredient.append(ingredients_li, clone, clone2, clone3, clone4, clone5);
