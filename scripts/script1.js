// The Password generator will generate a random password between 8-128 characters based on criteria the user specifies.

//Assignment Code 
var generateBtn = document.querySelector("#generate");

// Arrays for password variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declaration of variables
var passwordLength = "";
var useSpecialCharacter;
var useNumericCharacter;
var useLowerCase;
var useUpperCase;

// Start function to generate password
function generatePassword() {
// Prompt to confirm how many characters the user would like in their password    
  var passwordLength = parseInt(prompt("How many characters would you like in your password?"));

  // Loop if answer is outside allowed range of 8 to 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length should be between 8 to 128 characters, please try again");
    var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  } 
  // Display number of selected characters in the password 
  alert(`Your password will have ${passwordLength} characters`);

  // Determine password content characteristics
  var useSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters in your password");
  var useNumericCharacter = confirm("Click OK to confirm if you would like to include numbers in your password");    
  var useLowerCase = confirm("Click OK to confirm if you would like to include lowercase letters in your password");
  var useUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters in your password");

  // Loop if response is outside the expected parameters 
  while (useUpperCase === false && useLowerCase === false && useSpecialCharacter === false && useNumericCharacter === false) {
    alert("Please choose at least one parameter");
    var useSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters in your password");
    var useNumericCharacter = confirm("Click OK to confirm if you would like to include numbers in your password");    
    var useLowerCase = confirm("Click OK to confirm if you would like to include lowercase letters in your password");
    var useUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters in your password");
  } 
  // Determine value of password parameters 
  var passwordCharacters = []; // declare variable as an array.
      
  if (useSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar);
  }

  if (useNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number);
  }
      
  if (useLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if (useUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }

  //Log computed password array values in console
  console.log(passwordCharacters);

  // initial blank variable for loop selecting random characters from the array
  var randomPassword = "";
      
  // generate a random number for the length of array and use it to generate random password
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log("Your random password is " + randomPassword);
  }
  return randomPassword; // Function returns random password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);