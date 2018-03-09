let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value === "" || attempt.value === "") {
      setHiddenFields();
    } else if (!validateInput(input.value)) {
      return false;
    } else {
      attempt.value++;
    }
    if (getResults(input)) {
      setMessage("You Win! :)");
    } else if(!getResults() && attempt.value>=10) {
      setMessage("You Lose! :()");
    };
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

function validateInput(input) {
  if (input.length != 4) {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults(input) {
  let result = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">',
      counts = 0;
  for (i=0; i<input.length; i++) {
    if (input.charAt(i) === answer.value.charAt(i)) {
      result += `<span class="glyphicon glyphicon-ok"></span>`;
      counts ++;
    } else if (answer.value.indexOf(input.charAt(i)) > -1) {
      result += `<span class="glyphicon glyphicon-transfer"></span>`;
    } else {
      result += `<span class="glyphicon glyphicon-remove"></span>`;
    }
  }
  result += "</div></div>";
  document.getElementById("results").innerHTML = result;
  if (counts == 4) {
    return true;
  } else {
    return false;
  }
}
