'use strict';
// please do not delete the 'use strict' line above

let audio = new Audio("Pikaaaa.mp3");
// from: https://www.soundboard.com/sb/sound/298335
audio.play();

function changeColor() {
 
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
    break;
  }
  for (const e of targets) {
    e.style.backgroundColor = color;
  }
}

const btn = document.body;
btn.addEventListener("click", changeColor);


