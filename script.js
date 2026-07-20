document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    alert(button.innerText + " feature is coming soon!");
  });
});