// Assignment code here
//let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//let nums = '0123456789';
//let symbols = '@#$%&(){}!?[]';
let passWord = '';
let passWordSelection = [];

function generatePassword() {

 let passWordLength = parseInt(window.prompt ('Please select password length. It must be between 8 and 128 characters'));
  // Validates if user password length input is valid
  if (!passWordLength || passWordLength < 8 || passWordLength > 128) {
    alert('Please make a valid selection');
    parseInt(window.prompt ('Please select password length. It must be between 8 and 128 characters'));
  }
  // Password aoptions. Input will impact the passWordSelection array. End result will be used as a pool for random characters.
  let passWordLower = window.prompt ('Would you like it to include lower case letters?');
  if (passWordLower != null) {
   passWordSelection.unshift('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
  }
  let passWordUpper = window.prompt ('Would you like it to include upper case letters?');
  if (passWordUpper != null) {
    passWordSelection.unshift ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
  }
  let passWordSymbols = window.prompt ('Would you like it to include special characters?');
  if (passWordSymbols !=null) {
    passWordSelection.unshift ('@','#','$','%','&','(',')','{','}','!','?','[',']');
  }
  let passWordNums = window.prompt ('Would you like it to include numbers?');
  if (passWordNums != null){
    passWordSelection.unshift (1,2,3,4,5,6,7,8,9,0);
  }

  for (let i = 0; i<=passWordLength-1; i++ ) {
    passWord  += passWordSelection[Math.floor(Math.random() * passWordSelection.length)];
  }
  return passWord;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
