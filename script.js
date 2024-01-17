const primaryColors = ["Red", "Yellow", "Blue"];
const button = document.getElementById("button");
const colorText = document.querySelector(".color-text");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  colorText.textContent = primaryColors[randomNumber];
  document.body.style.backgroundColor = primaryColors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * primaryColors.length);
}
