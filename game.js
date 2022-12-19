var started = false;

$(document).keydown(function(event){
  if(!started){
    started=true;
  }
  $("h1").text("Level "+level.toString());
  createSequence();

});

function randomNumberGenerator(){
  var randomNumber = Math.floor(Math.random()*4+1);
  var buttonNumber = "."+randomNumber.toString();
  $(buttonNumber).delay(1200).fadeOut(300).fadeIn(300);
  return randomNumber;
}

var sequence = "";
var level = 1;
var i = 0;

function createSequence(){
  var randomNumber = randomNumberGenerator();
  var currentKey = randomNumber.toString();
  sequence+=currentKey;
}

function checkSequence(){
  if(started===false){
    $("button").click(function(){
      $("h1").text("Game over, press any key to restart");
      $("body").css("background-color", "red");
      setTimeout(function(){
        $("body").css("background-color", "#011F3F")
      },200);
    });
  }
  var currentKey = $(this).html();
  var buttonKey = "."+currentKey;
  $(buttonKey).fadeOut(200).fadeIn(200);
  $(buttonKey).addClass("pressed");
  setTimeout(function(){
    $(buttonKey).removeClass("pressed");
  },200);

  if(currentKey!=sequence[i]){
    $("h1").text("Game over, press any key to restart");
    $("body").css("background-color", "red")
    setTimeout(function(){
      $("body").css("background-color", "#011F3F")
    },200);
    startOver();
    i=0;
  }
  else{
    i++;
  }
  if(i===sequence.length && i!=0){
    i=0;
    level++;
    $("h1").text("Level "+level.toString());
    createSequence();
  }
}

function startOver(){
  sequence="";
  level=1;
}

$("button").click(checkSequence);
