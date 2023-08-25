const checkboxes = document.querySelectorAll('.check input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.checked = localStorage.getItem(checkbox.id) === "true";
  checkbox.addEventListener("change", () => {
    localStorage.setItem(checkbox.id, checkbox.checked);
    updateStyles();
  });
});

function updateStyles() {
  checkboxes.forEach((checkbox) => {
    const container = checkbox.parentElement.nextElementSibling;
    container
      .querySelector("p")
      .classList.toggle("completed", checkbox.checked);
  });
}

updateStyles();
