const textInput = document.querySelector('#validation-input');
const textClass = document.getElementsByClassName('item');

textLength = parseInt(textInput.dataset.length);
console.log(typeof(textLength),textLength);

textInput.addEventListener("input", (event) => {
   textInput.value = event.currentTarget.value;
   console.log(textInput.value.length)
})
textInput.addEventListener("focus", () => {
   textInput.value = "";
   textInput.className = "item";
});

textInput.addEventListener("blur", () => {
      if (textInput.value.length === "") {
     textInput.value = "";
   textInput.className = "";
   }
   else if (textInput.value.length !== textLength && textInput.value.length> 0) {
      textInput.classList.add("invalid");
   }
   else if ((textInput.value.length === textLength)) {
      textInput.classList.add("valid");
   }
});

