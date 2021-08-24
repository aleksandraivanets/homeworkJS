console.log("------task1--------");

const items = document.querySelectorAll(".item");
console.log(`В списку ${items.length} категорії.`);
items.forEach(function (item) {
  console.log(`Категорія: ${item.firstElementChild.textContent}`);
  let ulList = item.children[1],
    ulListChildrens = ulList.children;
  console.log(`Кількість елементів: ${ulListChildrens.length}`);
});

///
