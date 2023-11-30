document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
    const logoutButton = document.getElementById("log-out-button");
  
    const username = sessionStorage.getItem("username");
  
    if (username) {
      welcomeMessage.textContent = "Welcome, " + username + "!";
      
      // show logout
      if (logoutButton) {
        logoutButton.style.display = "inline-block";
      }
    } else {
      // user not found
      welcomeMessage.textContent = "Welcome, Guest!";
  
      // hide log-out
      if (logoutButton) {
        logoutButton.style.display = "none";
      }
  
      const loginContainer = document.createElement("div");
      loginContainer.textContent = "Please log in to access your profile.";
      
      const loginButton = document.createElement("a");
      loginButton.href = "log-in.html";
      loginButton.textContent = "Log In";
      loginButton.classList.add("log-button");
  
      loginContainer.appendChild(loginButton);
      welcomeMessage.parentNode.appendChild(loginContainer);
    }
  
    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        // remove from session
        sessionStorage.removeItem("username");
  
        // redirect
        window.location.href = "log-in.html";
      });
    }
  });
  