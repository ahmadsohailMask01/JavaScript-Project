const htmlBody = document.querySelector("body");
const hexColorRange = "0123456789ABCDEF";
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const spanToInsertKey = document.querySelector(".spanToInsert");
let changeColor;

const generateRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.round(Math.random() * 15);
    color += hexColorRange[randomNumber];
  }
  return color;
};

startButton.addEventListener("click", function () {
  if (!changeColor) {
    changeColor = setInterval(() => {
      const getColor = generateRandomColor();
      htmlBody.style.backgroundColor = `${getColor}`;
    }, 1500);
  }
});

stopButton.addEventListener("click", function () {
  clearInterval(changeColor);
  changeColor = null;
});

window.addEventListener("keydown", function (e) {
  spanToInsertKey.innerHTML = `<table style='color:white; border:1px solid white;'>
  <tr style="border:1px solid white">
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr style="border:1px solid white">
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`;
});
