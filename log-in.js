document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

       // console.log(username);
        //console.log(password);

        fetch('login.php', {
            method: 'POST',
            //body: `username=${username}&password=${password}`,
            body: JSON.stringify( { "username" : username, "password" :  password }  )
        })
            .then(response => response.text())
            .then(data => {
                if (data === 'success') {
                    // redirect
                    // const storedUser = sessionStorage.getItem(username);
                    sessionStorage.setItem("username", username);
                    window.location.href = "kit-list.html";
                } else {
                    errorMessage.textContent = "Login failed. Please try again!";
                    errorMessage.style.display = "block";

                    errorMessage.classList.add("error-highlight");
                    errorMessage.classList.remove("error-message");
                }
            })
            .catch(error => console.error('Error logging in:', error));
    });
});
