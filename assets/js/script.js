// Assignment Code
var generateBtn = document.querySelector("#generate");
var letterCase;
var numberCharacter;
var lengthPassword;

const passLowerCase = "abcdefghijklmnopqrstuvwxyz";
const passUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passNumber = "0123456789";
const passSpecialChar = "!@#$%^&*()";
var completePassword;

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  var promptCase = prompt("Generate password with lowercase (l), uppercase (u), or both (b)?", "enter choice of l, u, or b.");
    if (promptCase.toLowerCase !== "l" && promptCase.toLowerCase !== "u" && promptCase.toLowerCase !== "b" && !promptCase) {
      alert("please enter a valid choice");
      return;
    } 
    else if (promptCase === "l") {
      letterCase = 0;
    }
    else if (promptCase === "u") {
      letterCase = 1;
    }
    else {
      letterCase = 2;
    }

  var promptNumberCharacter = prompt("Would you like to add numbers (n), special character (c), both (b), or none (0)?", "enter choice of n, c, or b.");
    if (promptNumberCharacter.toLowerCase !== "n" && promptNumberCharacter.toLowerCase !== "c" && promptNumberCharacter.toLowerCase !== "b" && !promptNumberCharacter) {
      alert("please enter a valid choice");
      return;
    }
    else if (promptNumberCharacter.toLowerCase === "n") {
      numberCharacter = 0;
    }
    else if (promptNumberCharacter.toLowerCase === "c") {
      numberCharacter = 1;
    }
    else if (promptNumberCharacter.toLowerCase === "b") {
      numberCharacter = 2;
    }
    else {
      numberCharacter = 3;
    }

  var promptLength = prompt("Enter length of password between 8, 10, and 128 characters.", "enter length");
    if (promptLength !== "8" && promptLength !== "10" && promptLength !== "128" && !promptLength) {
      alert("please enter a valid choice");
      return;
    }
    else if (promptLength === "8") {
      lengthPassword = 8;
    }
    else if (promptLength === "10") {
      lengthPassword = 10;
    }
    else {
      lengthPassword = 128;
    }

  if (letterCase = 0) {
    if (numberCharacter = 0) {
      completePassword = passLowerCase + passNumber;
    }
    else if (numberCharacter = 1) {
      completePassword = passLowerCase + passSpecialChar;
    }
    else if (numberCharacter = 2) {
      completePassword = passLowerCase + passNumber + passSpecialChar;
    }
    else {
      completePassword = passLowerCase;
    }
  }
  else if (letterCase = 1) {
    if (numberCharacter = 0) {
      completePassword = passUpperCase + passNumber;
    }
    else if (numberCharacter = 1) {
      completePassword = passUpperCase + passSpecialChar;
    }
    else if (numberCharacter = 2) {
      completePassword = passUpperCase + passNumber + passSpecialChar;
    }
    else {
      completePassword = passUpperCase;
    }
  }
  else if (letterCase =2) {
    if (numberCharacter = 0) {
      completePassword = passLowerCase + passUpperCase + passNumber;
    }
    else if (numberCharacter = 1) {
      completePassword = passLowerCase + passUpperCase + passSpecialChar;
    }
    else if (numberCharacter = 2) {
      completePassword = passLowerCase + passUpperCase + passNumber + passSpecialChar;
    }
    else {
      completePassword = passLowerCase + passUpperCase;
    }
  }
  else {
    return;
  }

  var genPassword = (lengthPassword, completePassword) => {
    var password = "";
    for (var i = 0; i < lengthPassword; i++) {
      password += completePassword.charAt(Math.floor(Math.random() * completePassword.lengthPassword))
    };
  }

  passwordText.value = genPassword(lengthPassword.value, completePassword);

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

