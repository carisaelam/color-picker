const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("button");
const colorText = document.querySelector(".color-text");

button.addEventListener("click", function () {
  let hexColors = "#";
  for (i = 0; i < 6; i++) {
    hexColors += colors[getRandomNumber()];
  }
  colorText.textContent = hexColors;
  document.body.style.backgroundColor = hexColors;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
