// WELCOME MESSAGE
document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcome-message");

  // take from sessionStorage
  const username = sessionStorage.getItem("username");
  console.log(username);

  if (username) {
      // display username if found
      welcomeMessage.textContent = "Welcome, " + username + "!";
  } else {
      // if username is not found/user not logged in
      welcomeMessage.textContent = "Welcome, Guest!";
  }
});
