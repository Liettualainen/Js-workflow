const textinput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
   console.log(output.innerHTML);

textinput.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
         output.textContent = event.currentTarget.value;
    }
    else {
        output.textContent = "Anonymous";
   }
})

