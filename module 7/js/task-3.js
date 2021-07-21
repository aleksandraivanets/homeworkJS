console.log("------task3--------");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const img = document.querySelector("#gallery");
console.log(img);

img.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img
      src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="White and Black Long Fur Cat" style = "width: 300px; display: flex;"
    />
  </li>
  <li>
    <img
      src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="Orange and White Koi Fish Near Yellow Koi Fish" style = "width: 300px; display: flex;"
    />
  </li>
  <li>
    <img
      src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="Group of Horses Running" style = "width: 300px; display: flex;"
    />
  </li>`
);
