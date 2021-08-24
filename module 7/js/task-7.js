console.log("------task7--------");

let controlSize = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlSize.oninput = function () {
  text.style.fontSize = controlSize.value + "px";
};

///
