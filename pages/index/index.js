// Show input field

const boxShowInput = document.querySelector(".input-btn-box");
const boxInput = document.querySelector(".input-block");

const btnShowInput = document.getElementById("show-input-btn");

btnShowInput.addEventListener("click", () => {
  boxShowInput.style.display = "none";
  boxInput.style.display = "block";
});

/////////////// Show posts logic //////////////////
