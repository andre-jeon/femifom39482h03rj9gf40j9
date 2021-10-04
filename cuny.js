// //Doing the Date and time

// const thisTime = new Date();
// const hour = thisTime.getHours();
// const mins = thisTime.getMinutes();

// const calculateTime = () => {
//   if (hour > 12) {
//     if (mins < 10) {
//       return `${hour - 12}:0${mins} PM`;
//     } else {
//       return `${hour - 12}:${mins} PM`;
//     }
//   } else {
//     if (mins < 10) {
//       return `${hour}:0${mins} AM`;
//     } else {
//       return `${hour}:${mins} AM`;
//     }
//   }
// };

// const finalTime = document.createElement("p");
// finalTime.innerHTML = calculateTime();

// const timeDiv = document.querySelector(".time");
// timeDiv.append(finalTime);

const darkButton = document.querySelector(".darkButton");
const body = document.querySelector("body");
const backButton = document.querySelector("#backButton");

darkButton.addEventListener("click", () => {
  body.classList.toggle("darkOn");
  backButton.classList.toggle("darkBack");
});
