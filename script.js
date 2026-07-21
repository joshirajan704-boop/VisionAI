const API_URL = "https://visionai-backend-ubhl.onrender.com";

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      const res = await fetch(API_URL + "/");
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("Backend is not reachable.");
    }
  });
});
const BACKEND_URL = "https://visionai-backend-ubhl.onrender.com";

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      const res = await fetch(BACKEND_URL);
      const data = await res.json();
      alert(data.message);
    } catch (e) {
      alert("Backend connection failed!");
    }
  });
});
