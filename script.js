var counter = 0;
var upperLimit = 0;
var counterElement = document.getElementById('counter');
var inputfield = document.getElementById('input');
var timer = null;
var fingers = document.getElementById('fingers');
var toes = document.getElementById('toes'); 
function reset(){
  //alert("reset");
  clearInterval(timer);
  inputfield.value = "";
  counter = 0;
  upperLimit = 0;
  counterElement.innerHTML = counter;
  resetFingers();
  resetToes();
}

function restart(){
  //alert("restart");
  clearInterval(timer);
  counter = 0;
  counterElement.innerHTML = counter;
  resetFingers();
  resetToes();
  feezbuzz();
}

function hightLightFingers(){
  fingers.style.color = "red";
}

function hightLightToes(){
  toes.style.color = "red";
}

function resetFingers(){
  fingers.style.color = "black";
}

function resetToes(){
  toes.style.color = "black";
}

function feezbuzzUtil(num){
  resetFingers();
  resetToes();
  
  if(num % 15 == 0){
    hightLightFingers();
    hightLightToes();
  }
  else if (num % 3 == 0){
    hightLightFingers();
  }
  else if(num % 5 == 0){
    hightLightToes();
  }
  else{
    
  }
}

function feezbuzz(){
  timer = setInterval(function(){
    if(counter >= upperLimit){
      clearInterval(timer);
    }
    else{
      counter++;
      counterElement.innerHTML = counter;
      feezbuzzUtil(counter);
    }
  },(1000));
}

function play(){
  clearInterval(timer);
  var num = parseInt(inputfield.value);
  upperLimit += num;
  //alert(upperLimit);
  feezbuzz();
}

