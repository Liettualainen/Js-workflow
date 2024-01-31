const colorBody = document.getElementsByClassName('color')[0];
console.log(colorBody);
const buttonChangeColor = document.getElementsByClassName('change-color')[0];
console.log(buttonChangeColor);
const textColor = document.getElementsByClassName('text-color')[0];
console.log(textColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 

buttonChangeColor.addEventListener("click", () => {
    colorBody.innerText = getRandomHexColor();
    document.body.style.background = getRandomHexColor();
    textColor.style.color = "hsl(0, 0%, 100%)";

});