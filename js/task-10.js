const input = document.getElementsByTagName('input')[0];
const buttonCreate = document.getElementsByTagName('button')[0];
const buttonDestroy = document.getElementsByTagName('button')[1];
const currentDiv = document.getElementById("boxes");

let arrayStep = 0;
let counter = 30;
const CollectionDiv = []; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
        let newDiv = document.createElement("div");
        newDiv.style.marginTop = "5px";
        newDiv.style.width = counter + "px";
        newDiv.style.height = counter + "px";
        counter = counter + 10; 
        newDiv.style.background = getRandomHexColor();
        CollectionDiv.push(newDiv);
  }
    currentDiv.append(...CollectionDiv);
}
function destroyBoxes() {
   currentDiv.innerHTML = "";
    CollectionDiv.length = 0;
    counter = 30;
}


input.addEventListener("input", (event) => {
       arrayStep =  event.currentTarget.value ;
})
buttonCreate.addEventListener("click", () => {
    createBoxes(arrayStep);
})
buttonDestroy.addEventListener("click", () => {
    destroyBoxes();
})



