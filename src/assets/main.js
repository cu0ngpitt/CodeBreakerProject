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
    if (getResults()) {
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

function validateInput(x) {
  if (x.length != 4) {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults(x) {
  let input = document.getElementById("user-guess").value,
      disp = document.getElementById("results"),
      newDiv = document.createElement("div");
      newDiv.class = "row";
  newDiv.innerHTML = '<span class="col-md-6">' + input + '</span><div class="col-md-6">';
  disp.appendChild(newDiv);
  for (i=0; i<=input.length; i++) {
    if (input.charAt[i] === answer.value.charAt[i]) {
      `<span class="glyphicon glyphicon-ok"></span>`;
    } else if (input.charAt[i] === answer.value.charAt[i+1] || input.charAt[i] === answer.value.charAt[i+2] || input.charAt[i] === answer.value.charAt[i+3]){
      `<span class="glyphicon glyphicon-transfer"></span>`;
    } else {
      `<span class="glyphicon glyphicon-remove"></span>`;
    }
  }
}
