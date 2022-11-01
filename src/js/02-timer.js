import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStart = document.querySelector('button');
buttonStart.setAttribute("disabled", true);
let countDown = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      let currentDate =  Date.now();
          console.log(currentDate);
      // console.log(selectedDates[0].getTime());
      const startDate = selectedDates[0].getTime();
      console.log(startDate);

      if (currentDate < startDate){
        console.log("Ok");
        buttonStart.removeAttribute("disabled","disabled");

        buttonStart.addEventListener("click", onTimeStart);
        function onTimeStart() {
  
          intervalId = setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = startDate - currentDate;
            console.log(deltaTime);
            const countDown = convertMs(deltaTime);
            console.log(countDown);
          }, 1000);
        }
      }else {
window.alert("Please choose a date in the future");
      }  
    },
  };
function stopTimer(deltaTime){
 if (deltaTime <= 0){
clearInterval(intervalId);
}
};
function updateTimer({ days, hours, minutes, seconds }) {
const textSeconds = document.querySelector('span[data-seconds]');
        
textSeconds.textContent = `${countDown[seconds]}` ;
}

 const calendar = flatpickr("#datetime-picker", options);

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');}

  

    const timerDesign = document.querySelector(".timer");

    timerDesign.style.color = "teal";
    timerDesign.style.fontSize = "18px";
    timerDesign.style.textAlign = "left";
    // timerDesign.style.display = "flex";
    // timerDesign.style.marginRight = "20px";
    timerDesign.style.padding = "20px";








    // const textDays = document.querySelector('span[data-days]');
    


    // textDays.textContent = ${countDown};

    // document.querySelector('span[data-days]').textContent='${countDown()}';

// clockface: document.querySelector('.js-clockface'),
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }


// buttonStart.addEventListener("click", onTimeStart());
    


// function onTimeStart() {
//   console.log("Ok start");
//   // if (this.isActive) {
//   //   return;
//   // }
//   // buttonStart.setAttribute("disabled","disabled");
//   // buttonStop.removeAttribute("disabled","disabled");


//   function deltaTime(){
//     const startDate = calendar.SelectedDates[0];

//     const deltaTime = startDate - currentDate;
//     console.log(deltaTime);
//     const time = this.getTimeComponents(deltaTime);
   
//       // this.onTick(time);
//   }
//   // timerId = setInterval(deltaTime, 1000);

//    };
  


//  const  timer(){
//   start(){
//     const startTime = calendar.selectedDates[0];
// console.log(startTime);
//   }
// }

 

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// start() {
//   if (this.isActive) {
//     return;
//   }

//   const startTime = Date.now();
//   this.isActive = true;

//   this.intervalId = setInterval(() => {
//     const currentTime = Date.now();
//     const deltaTime = currentTime - startTime;
//     const time = this.getTimeComponents(deltaTime);

//     this.onTick(time);
//   }, 1000);
// },


// pad(value) {
//   return String(value).padStart(2, '0');
// }
// }

// const timerWindow = document.querySelector('#datetime-picker');
// let currentDate =  new Date();
