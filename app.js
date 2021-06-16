document.querySelector(".one").style.color = "red";

var number = document.querySelectorAll(".key").length;

//document.querySelector(".one").innerHTML = number;

document.addEventListener("keypress", function(event){
  var chara = event.key;
  sound(chara);
});

function sound(key){

  switch (key) {
    case "a":
        var audio1 = new Audio("sounds/clap.wav");
          audio1.play();
          break;

    case "s":
          var audio2 = new Audio("sounds/hihat.wav");
          audio2.play();
        break;

    case "d":
            var audio3 = new Audio("sounds/kick.wav");
            audio3.play();
          break;

    case "f":
              var audio4 = new Audio("sounds/openhat.wav");
              audio4.play();
            break;

    case "g":
            var audio5 = new Audio("sounds/boom.wav");
             audio5.play();
              break;

    case "h":
            var audio6 = new Audio("sounds/ride.wav");
            audio6.play();
                break;

    case "j":
              var audio7 = new Audio("sounds/snare.wav");
              audio7.play();
                  break;

    case "k":
              var audio8 = new Audio("sounds/tom.wav");
              audio8.play();
                    break;

    case "l":
              var audio9 = new Audio("sounds/tink.wav");
              audio9.play();
                      break;

    default: alert(key);
  }
}
