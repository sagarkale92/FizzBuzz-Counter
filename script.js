/** Initial Loading **/
var counter = 0;
var upperLimit = 0;
var counterElement = document.getElementById('counter');
var inputfield = document.getElementById('input');
var timer = null;
var fingers = document.getElementById('fingers');
var toes = document.getElementById('toes'); 
var error = document.getElementById('error');
var progressBar = document.getElementsByTagName("progress")[0];

/** Highlight Fingers and Toes **/

function hightLightFingers(){
  fingers.style.backgroundColor = "rgba(159, 124, 104, 1)";
}

function hightLightToes(){
  toes.style.backgroundColor = "rgba(159, 124, 104, 1)";
}

function resetFingers(){
  fingers.style.backgroundColor = "rgba(159, 124, 104, 0.2)";
}

function resetToes(){
  toes.style.backgroundColor = "rgba(159, 124, 104, 0.2)";
}

/** Feez Buzz Algorithm **/
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
      progressBar.value = counter;
      feezbuzzUtil(counter);
    }
  },(1000));
}

/** Error Display **/
function showError(){
  error.style.display = "block";
}

function hideError(){
  error.style.display = "none";
}

/** Reset Counter and upper limit **/
function reset(){
  clearInterval(timer);
  inputfield.value = "";
  counter = 0;
  upperLimit = 0;
  progressBar.value = 0;
  progressBar.max = 0;
  counterElement.innerHTML = counter;
  resetFingers();
  resetToes();
  hideError();
}

/** Restarts Counter **/
function restart(){
  clearInterval(timer);
  counter = 0;
  counterElement.innerHTML = counter;
  progressBar.value = 0;
  resetFingers();
  resetToes();
  hideError();
  feezbuzz();
}

/** Updates UpperLimit and starts counter **/
function play(){
  clearInterval(timer);
  var num = parseInt(inputfield.value);
  if(num > 0){
    hideError();
    upperLimit += num;
    progressBar.max = upperLimit;
    feezbuzz();
  }
  else{
    showError();
  }
}

