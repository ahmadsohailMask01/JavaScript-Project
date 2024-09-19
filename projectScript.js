const containerChildren = document.querySelector(".container").children;
const getArrayFromChildren = Array.from(containerChildren);
const submitButton = document.querySelector(".submitButton");
const form = document.querySelector("form");
const htmlBody = document.body;
const clockDiv = document.querySelector(".clock");
clockDiv.style.textTransform = "uppercase";

setInterval(function () {
  const date = new Date();
  const currentTime = date.toLocaleTimeString("en-PK");
  clockDiv.innerHTML = `${currentTime}`;
}, 1000);

getArrayFromChildren.forEach((div) => {
  div.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.title == "grey" || "blue") {
      htmlBody.style.color = "white";
      htmlBody.style.backgroundColor = e.target.title;
    }
    if (e.target.title == "yellow") {
      htmlBody.style.color = "green";
      htmlBody.style.backgroundColor = e.target.title;
    }
    if (e.target.title == "white") {
      htmlBody.style.color = "black";
      htmlBody.style.backgroundColor = e.target.title;
    }
  });
});

const calculateValue = (e) => {
  e.preventDefault();
  const heightValue = parseInt(document.querySelector(".height").value);
  const weightValue = parseInt(document.querySelector(".weight").value);
  const container2 = document.querySelector(".container2");
  const getResultDiv = document.querySelector(".resultDiv");
  const weightRangeSpan = document.querySelector(".rangeSpan");
  const case1 = heightValue === "" && weight;
  const case2 = heightValue < 0;
  const case3 = isNaN(heightValue);

  if (getResultDiv) {
    getResultDiv.remove();
  }
  if (weightRangeSpan) {
    weightRangeSpan.remove();
  }

  switch (true) {
    case case1:
      alert("Please enter valid value!");
      break;
    case case2:
      alert("Please enter positive value!");
      break;
    case case3:
      alert("Please enter a valid Number");
      break;
    default:
      const calculatedValue =
        weightValue / ((heightValue * heightValue) / 10000);
      const div = document.createElement("div");
      div.style.display = "flex";
      div.className = "resultDiv";
      div.style.flexDirection = "row";
      div.style.width = "100%";
      div.style.gap = "5%";
      div.style.justifyContent = "center";
      div.style.marginTop = "2%";
      div.innerHTML = `Calculated BMI is: <b style = "color: red">${calculatedValue.toFixed(
        2
      )}<b>`;
      container2.appendChild(div);

      switch (true) {
        case calculatedValue <= 18.6: {
          const rangeSpan = document.createElement("span");
          rangeSpan.setAttribute("class", "rangeSpan");
          rangeSpan.style.color = "red";
          rangeSpan.style.marginTop = "2%";
          rangeSpan.innerText = `Under Weight`;
          container2.appendChild(rangeSpan);
          break;
        }
        case calculatedValue > 18.6 && calculatedValue <= 24.9: {
          const rangeSpan = document.createElement("span");
          rangeSpan.setAttribute("class", "rangeSpan");
          rangeSpan.style.color = "green";
          rangeSpan.style.marginTop = "2%";
          rangeSpan.innerText = `Normal Range of Weight`;
          container2.appendChild(rangeSpan);
          break;
        }
        case calculatedValue > 24.9:
          {
            const rangeSpan = document.createElement("span");
            rangeSpan.setAttribute("class", "rangeSpan");
            rangeSpan.style.color = "red";
            rangeSpan.style.marginTop = "2%";
            rangeSpan.innerText = `Over Weight`;
            container2.appendChild(rangeSpan);
          }
          break;
        default:
          break;
      }
      break;
  }
};

form.addEventListener("submit", calculateValue);
