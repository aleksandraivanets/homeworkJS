console.log("------task5--------");

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
  if (input.value === "") {
    nameOutput.innerHTML = "Незнайомець";
  } else {
    nameOutput.innerHTML = input.value;
  }
};
