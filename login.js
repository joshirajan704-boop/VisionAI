import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "./firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");

loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    alert("Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});

googleBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);

    alert("Google Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});
