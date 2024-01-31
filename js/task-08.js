const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
    if (email === "" || password === "") {
        return window.alert("Please fill in all the fields!");
    }

    let users = {
         email:'',
        password: '',
    }
    users.email = email;
    users.password = password;
    console.log("users:", users);

  form.reset();
}