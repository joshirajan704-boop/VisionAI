import {
  auth,
  createUserWithEmailAndPassword
} from "./firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    alert("Account Created Successfully!");

    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }
});
