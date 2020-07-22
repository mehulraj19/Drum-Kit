
for (var i = 0; document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var val = this.innerHTML;
    makesound(val);
    addAnimation(val);
  });

  document.addEventListener("keydown",function(ev){
    makesound(ev.key);
    addAnimation(ev.key);
  });
  function addAnimation(ckey){
    var activebutton = document.querySelector("."+ckey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
      activebutton.classList.remove("pressed");
    },1000);
  }
}

function makesound(val){

  switch (val) {

    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case 's':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case 'l':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default: console.log(val);
  }
}
