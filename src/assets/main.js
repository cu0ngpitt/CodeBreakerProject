<<<<<<< HEAD
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value === "" || attempt.value === "") {
      setHiddenFields();
    }

//    if (!validateInput(input.value) {
//      return false;
//    } else {
//      attempt++;
//    }
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
  attempt.value = 0;
}
function setMessage(x) {
  document.getElementById("message").innerHTML = x;
}
function validateInput(y) {
  if (y.length != 4) {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults() {

}
=======
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value === "" || attempt.value === "") {
      setHiddenFields();
    }

    if (!validateInput(input.value) {
      return false;
    } else {
      attempt++;
    }
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
  attempt.value = 0;
}
function setMessage(x) {
  document.getElementById("message").innerHTML = x;
}
function validateInput(y) {
  if (y.length != 4) {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults() {

} 
>>>>>>> f9d3036ebbfa79645a1875efa3017235e2e2ca44
