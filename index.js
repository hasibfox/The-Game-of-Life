
// let replay = document.getElementById("text-allow");


// var audio = document.getElementById("audio");
// const on = document.getElementById("on");
// const off = document.getElementById("off");


// function play() {
//   audio.play();
//   on.style.color="blue ";
//   off.style.color="";

// }
// function pause() {
//   audio.pause();
//   off.style.color="blue ";
//   on.style.color="";

// }

// setInterval(function(){
//   on.click()
// }, 180000);
let rain = document.getElementById("rainsounds")
console.log(rain.muted)

rain.mute

function startSound(){
  rain.muted = false;
  console.log("sdfnsdi")
}
startSound();

function pause(){
  if (rain.muted == false) {
    rain.muted = true;
    off.style.color="blue ";
    on.style.color="";
    console.log("clicked", rain.muted)

  }
}
function play(){
  if (rain.muted == true) {
    rain.muted = false;
    on.style.color="blue ";
    off.style.color="";
    console.log("clicked", rain.muted)

  }
}