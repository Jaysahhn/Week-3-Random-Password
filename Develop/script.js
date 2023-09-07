// Assignment Code
var generateBtn = document.querySelector("#generate"); // NO TOUCHY NO TOUCHY NO TOUCHY

// Write password to the #password input

function generatePassword() {
  // creating all the variables needed 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*()_-+=`~[]{};':,./<>?";
  var genPassword = ""; // essentially, upperCase + lowerCase + numbers + symbols
  var passLengthProm; // prompts variable vvv
  var upperCaseProm;
  var lowerCaseProm;
  var numberProm;
  var symbolProm;
  var finPassword = []; // array brackets to define. returned undefined otherwise

  passLengthProm = prompt("Please enter a number between 8-128 for the length of your password."); // using prompt here so that the user has to provide an answer
  while (passLengthProm < 8 || passLengthProm > 128) { // targets the numbers outside the range between 8-128
    passLengthProm = prompt("Please select a valid number between 8-128 for password length.")
  };
  console.log(passLengthProm); // logs the number chosen by the user
  // used a while loop so that it continues to loop until a valid answer is chosen. 

  upperCaseProm = confirm("Please add any number of UPPERCASE letters."); // user doesn't need to physically input answer so we use confirm
  if (upperCaseProm) {
    genPassword = genPassword.concat(upperCase) //.concat so that we can add the value to the empty string of genPassword
  } else {
    alert("Uppercase letters will NOT be added to your password.")
  };
  console.log(genPassword); // checking to see if uppercase letters has been added to the variable genPassword

  lowerCaseProm = confirm("Please add any number of LOWERCASE letters.");
  if (lowerCaseProm) {
    genPassword = genPassword.concat(lowerCase)
  } else {
    alert("Lowercase letters will NOT be added to your password.")
  };
  console.log(genPassword); // checking to see if lowercase letters has been added to the variable genPassword

  numberProm = confirm("Please add any number of numbers.");
  if (numberProm) {
    genPassword = genPassword.concat(numbers)
  } else {
    alert("Numbers will NOT be added to your password.")
  };
  console.log(genPassword); // checking to see if numbers has been added to the variable genPassword

  symbolProm = confirm("Please add any number of symbols.");
  if (symbolProm) {
    genPassword = genPassword.concat(symbols)
  } else {
    alert("Symbols will NOT be added to your password.")
  };
  console.log(genPassword); // checking to see if symbol has been added to the variable genPassword

  if (!upperCaseProm && !lowerCaseProm && !numberProm && !symbolProm) { // if user does not want to include any of the prompts, will display alert telling them to redo.
    alert("Password cannot be created without characters. Please try again.")
    return;
  };

  for (var i = 0; i < passLengthProm; i++) { // as long as the index of the length of the password is less than max...
    var random = Math.floor(Math.random() * genPassword.length); // randomly chooses one of the characters in the pass and rounds that number into a whole number, returns that character's index
    finPassword += genPassword.substring(random, random + 1); // returns each randomly chosen index value and puts it into finPassword.
  }
  return finPassword; // finishes the function, returns the password  
};




// (confirm("The password MUST contain any number of uppercase letters.") === true) 
// (confirm("The password MUST contain any number of lowercase letters.") === true) 
// (confirm("The password MUST contain any number of number.") === true) 
// (confirm("The password MUST contain any number of symbol characters.") === true) 
// prompt("Please enter password.");


function writePassword() { // NO TOUCHY NO TOUCHY NO TOUCHY
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // NO TOUCHY NO TOUCHY NO TOUCHY 



// Pseudocode 
// create function generatePassword()
// prompt user how for password length 
// verify that length is between between 8-128 characters
//if it isn't, keep prompting until they enter a valid value 
// ask user if they want to include UPPERCASE/LOWERCASE/SPECIAL CHARACTERS/NUMBERS
// keep track of answers in variables 