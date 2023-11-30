// CREATE ACCOUNT
document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("create-button");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    createButton.addEventListener("click", function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const username = usernameInput.value;
        const password = passwordInput.value;

        //console.log('Email:', email);
        //console.log('Username:', username);
        //console.log('Password:', password);
  

        fetch('register.php', {
            method: 'POST',
            body: JSON.stringify( { "email" : email, "username" : username, "password" : password }  )  //`email=${email}&username=${username}&password=${password}`,
        })
            .then(response => response.text())
            .then(data => {
                if (data === 'success') {
                    // redirect
                    window.location.href = "kit-list.html";
                    sessionStorage.setItem("username", username);
                } else {
                    // failure
                    errorMessage.textContent = "Registration failed. Please try again!";
                    errorMessage.style.display = "block";

                    errorMessage.classList.add("error-highlight");
                    errorMessage.classList.remove("error-message");
                }
            })
            .catch(error => console.error('Error registering:', error));
    });
});
