function validateFn(){
  var firstName = document.getElementById('fName').value;
  if(firstName.length == 0){
    inputFieldChecks("First name is required", "fnLabel", "red");
    firstName.ClassName = "fname";
    return false;
  }else if (!firstName.match(/^[A-Za-z]{1,20}\S\D\b$/g)) {
    inputFieldChecks("Your first name should be between 3-20 characters long no digit(s), no space", "fnLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "fnLabel", "green");
    return true;
  }
}

function validateLn(){
  var lastName = document.getElementById('lName').value;
  if(lastName.length == 0){
    inputFieldChecks("Last name is required", "lnLabel", "red");
    return false;
  }else if (!lastName.match(/^[A-Za-z]{1,20}\S\D\b$/g)) {
    inputFieldChecks("Your Last name should be between 3-20 characters long no digit(s), no space", "lnLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "lnLabel", "green");
    return true;
  }
}

function validateTel(){
  var telephone = document.getElementById('tel').value;
  if(telephone.length == 0){
    inputFieldChecks("A telephone number is required", "telLabel", "red");
    return false;
  }else if (!telephone.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}$/g)) {
    inputFieldChecks("Your telephone number should have this format (000)0000-0000", "telLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "telLabel", "green");
    return true;
  }
}

function validateMob(){
  var mobile = document.getElementById('mob').value;
  if(mobile.length == 0){
    inputFieldChecks("A mobile number is required", "mobLabel", "red");
    return false;
  }else if (!mobile.match(/^[(]{1}[+]{1}[0-9]{2,3}[)]{1}[0]{0}[0-9]{10}$/g)) {
    inputFieldChecks("Your mobile number should have this format (+00)0000000000", "mobLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "mobLabel", "green");
    return true;
  }
}

function validateEmail(){
  var email = document.getElementById('email').value;
  if(email.length == 0){
    inputFieldChecks("An email address is required", "emlLabel", "red");
    return false;
  }else if (!email.match(/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-z]+$/g)) {
    inputFieldChecks("Your mobile number should have this format (+00)0000000000", "emlLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "emlLabel", "green");
    return true;
  }
}

function validateFlat(){
  var flat = document.getElementById('flatNo').value;
  if(flat.length == 0){
    inputFieldChecks("A flat number is required", "flatLabel", "red");
    return false;
  }else if (!flat.match(/^[0-9]{1,4}$/g)) {
    inputFieldChecks("Your flat number should have the following format (01, 12, 123, 1234)", "flatLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "flatLabel", "green");
    return true;
  }
}

function validateAddress(){
  var address = document.getElementById('line1').value;
  if(address.length == 0){
    inputFieldChecks("An address is required", "flatLabel", "red");
    return false;
  }else if (!address.match(/^([a-zA-Z,-]){0,50}\s?([a-zA-Z,-?]\s?){0,50}\S$/g)) {
    inputFieldChecks("Your address should not end with a space and less than 100 characters", "addressLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "addressLabel", "green");
    return true;
  }
}

function validateCity(){
  var city = document.getElementById('city').value;
  if(city.length == 0){
    inputFieldChecks("A city is required", "cityLabel", "red");
    return false;
  }else if (!city.match(/^[A-Za-z]{1,20}\S\D$/g)) {
    inputFieldChecks("City should be between 3-20 characters long no digit(s), no space", "cityLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "cityLabel", "green");
    return true;
  }
}

function validatePc(){
  var postcode = document.getElementById('pc').value;
  if(postcode.length == 0){
    inputFieldChecks("An postcode is required", "pcLabel", "red");
    return false;
  }else if (!postcode.match(/^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,2}\s?[0-9]{1,2}[A-Z]{2}$/g)) {
    inputFieldChecks("Your postcode should have the following format (AA1 5AA)", "pcLabel", "red");
    return false;
  }else {
    inputFieldChecks("&#x2705;", "pcLabel", "green");
    return true;
  }
}



function inputFieldChecks(message, promptLocation, color){
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
