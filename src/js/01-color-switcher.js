
let timerId ;
const bodyBack = document.body;

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

buttonStart.addEventListener("click", onClickStart);
buttonStop.addEventListener("click", onClickStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function flashColor(){
bodyBack.style.backgroundColor = getRandomHexColor();
}

function onClickStart() {
    buttonStart.setAttribute("disabled", true);
    buttonStop.removeAttribute("disabled","disabled");
    
    timerId = setInterval(flashColor, 1000);
     };

  function onClickStop() {
    buttonStart.removeAttribute("disabled","disabled");
    buttonStop.setAttribute("disabled", true);
    clearInterval(timerId);
  };

  

//   startBtn.addEventListener("click", () => {
//     timerId = setInterval(() => {
//       console.log(`I love async JS!  ${Math.random()}`);
//     }, 1000);
//   });