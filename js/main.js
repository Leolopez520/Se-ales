window.onload = function () {    
    const dark = document.getElementById("to-dark");
    const clear = document.getElementById("to-clear");
    const color = document.getElementById("to-color");

    dark.addEventListener('click', cambiarDark, false);    
    clear.addEventListener('click', cambiarClear, false);
    color.addEventListener('click', cambiarColor, false);
    //init();    
}

function cambiarDark() {
    const tema = document.getElementById("theme");
    tema.href = "css/dark.css";
}

function cambiarClear() {
    const tema = document.getElementById("theme");
    tema.href = "css/clear.css";
}

function cambiarColor() {
    const tema = document.getElementById("theme");
    tema.href = "css/color.css";
}


const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("div-container");

BtnAdd.addEventListener("click", AddNew);

function AddNew() {
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add("div-shadow");
  DivContainer.appendChild(newDiv);
}