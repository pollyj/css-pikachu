'use strict';
// please do not delete the 'use strict' line above

const sadMouth = document.getElementsByClassName("sad-mouth");
const happyMouth = document.getElementsByClassName("happy-mouth");
let audio = new Audio("Pikaaaa.mp3");
// from: https://www.soundboard.com/sb/sound/298335
audio.play();


function changeColor() {
  sadFace();
 
  let number = Math.ceil(Math.random()*10);
  let targets = [document.body, document.getElementsByClassName("change-color")[0], document.getElementsByClassName("change-color")[1]]
  let color = "";

  switch (number) {
    case 1:
    color = "#FDB9B9";
    break;
    case 2:
    color = "#FDDBB9";
    break;
    case 3:
    color = "#D2FDB9";
    break;
    case 4:
    color = "#B9FDEC";
    break;
    case 5:
    color = "#B9CCFD";
    break;
    case 6:
    color = "#D7B9FD";
    break;
    case 7:
    color = "#FCB9FD";
    break;
    case 8:
    color = "#B9FDD3";
    break;
    case 9:
    color = "#29EDB3";    
    break;
    case 10: //pikachu yellow
    color = "#f4dc26";
    audio.play(); 
    happyFace();
    break;
  }
  for (const e of targets) {
    e.style.backgroundColor = color;
  }
}



function sadFace(){
  for (const e of sadMouth) {
    e.style.visibility = "visible";
  }
  for (const e of happyMouth) {
    e.style.visibility = "hidden";
  }
}

function happyFace(){
  for (const e of sadMouth) {
    e.style.visibility = "hidden";
  }
  for (const e of happyMouth) {
    e.style.visibility = "visible";
  }
}

const btn = document.body;
btn.addEventListener("click", changeColor);


