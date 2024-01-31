const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

const decrement =  parseInt(document.getElementsByTagName("button")[0].innerText);
const increment = parseInt(document.getElementsByTagName("button")[1].innerText);
let counterValue = parseInt(document.querySelector('#value').innerText);



buttonDecrement.addEventListener("click", () => {
    counterValue += decrement;
    value.innerHTML=counterValue;
    
});

buttonIncrement.addEventListener("click", () => {
    counterValue += increment;
    value.innerHTML=counterValue;
    
});
