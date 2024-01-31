const input = document.querySelector('#font-size-control');
const textToChange = document.querySelector("#text");

input.addEventListener("input", (event) => {
    fontChange = parseInt(event.currentTarget.value);
    if (fontChange <= 40) {
          textToChange.style.color = "red";
    }
    else if (fontChange <= 60) {
        textToChange.style.color = "yellow";
    }
    else if (fontChange <= 80) {
        textToChange.style.color = "green";
    }

    textToChange.style.fontSize = fontChange + "px";
})