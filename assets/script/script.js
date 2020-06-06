// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  alert("We are about to create a password for you");

  var specialArray = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var password = "";

  var passLength = prompt(
    "Please enter a number between 8 and 128 to indicate how many characters you wish your password to have"
  );

  if (!passLength) {
    var password = "Password was not generated!";
    return password;
  } else {
    while (passLength < 8 || passLength > 128) {
      passLength = prompt("Invalid password length. Please try again");
    }

    var specialChars = confirm(
      'Click "OK" if you wish to include SPECIAL characters'
    );
    var lowerChars = confirm(
      'Click "OK" if you wish to include LOWERCASE characters'
    );
    var upperChars = confirm(
      'Click "OK" if you wish to include UPPERCASE characters'
    );
    var numbers = confirm(
      'Click "OK" if you wish to include NUMBERS characters'
    );

    console.log(passLength);

    for (password.length = 0; password.length < passLength; password.length++) {
      if (specialChars && password.length < passLength) {
        var indexSpecial = Math.floor(Math.random() * specialArray.length);
        password = password + specialArray[indexSpecial];
      }
      if (lowerChars && password.length < passLength) {
        var indexLower = Math.floor(Math.random() * alphabet.length);
        password = password + alphabet[indexLower];
      }

      if (upperChars && password.length < passLength) {
        var indexUpper = Math.floor(Math.random() * alphabet.length);
        password = password + alphabet[indexUpper].toUpperCase();
      }

      if (numbers && password.length < passLength) {
        var indexNumber = Math.floor(Math.random() * numlist.length);
        password = password + numlist[indexNumber];
      }
    }
    return password;
  }
}
