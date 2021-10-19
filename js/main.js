var email = document.querySelector(".email");
var number = document.querySelector(".num");
var password = document.querySelector(".pass");
var ch = document.querySelector(".ch");
var form = document.querySelector(".form");

var emailErorr = document.querySelector(".emailErorr");
var numberErorr = document.querySelector(".numberErorr");
var passErorr = document.querySelector(".passErorr");
var checkErorr = document.querySelector(".checkErorr");

function submitForm(e) {
  var valid = false;

  const eFoem =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nubmberTest = /077[0-9]{7}/gm;
  const passTest =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/;

  // check email
  if (!eFoem.test(email.value)) {
    emailErorr.innerHTML = "Your email is not valid!";
    emailErorr.style.color = "red";
  }

  // check number
  else if (!nubmberTest.test(number.value)) {
    numberErorr.innerHTML = "Your number is not valid!";
    numberErorr.style.color = "red";
  }

  // check password
  else if (!passTest.test(password.value)) {
    passErorr.innerHTML = "Your password not secure!";
    passErorr.style.color = "red";
  }

  // check checkbox
  else if (ch.checked == false) {
    checkErorr.innerHTML = "Your have to check this feild!";
    checkErorr.style.color = "red";
  } else valid = true;

  if (valid === false) {
    e.preventDefault();
  } else {
    e.defaultPrevented = false;
  }
}

email.onkeydown = function () {
  emailErorr.innerHTML = "";
};
number.onkeydown = function () {
  numberErorr.innerHTML = "";
};
password.onkeydown = function () {
  passErorr.innerHTML = "";
};
ch.onclick = function () {
  checkErorr.innerHTML = "";
};
