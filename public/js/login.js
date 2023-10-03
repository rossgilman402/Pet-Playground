const { create } = require("../../models/BlogPost");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

const createNewFormHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/createAccount");
};

document
  .querySelector("#login-button")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#sign-up")
  .addEventListener("click", createNewFormHandler);
