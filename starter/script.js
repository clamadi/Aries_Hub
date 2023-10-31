// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random()*arr.length)] 
}

// Function to generate password with user input
function generatePassword() {
var password ="" // Holds the generate password
var passwordOPtions ="" //holds the user choice for the criteria
var length = 0 //holds the lenght selected by the user.
//create a while loop for password length and its not a number.
while(length<8||length>128||isNaN(length) ){
  length = parseInt(prompt("Password must be 8 - 128 characters"))
} //parseInt is use to convert to a string.

// create variables to confim the User's password options
var includeuppercase = confirm("Would you like to include uppercase letter?")
var includelowercase = confirm("Would you like to include lowercase letter?")
var includenumbers = confirm("Would you like to include number?")
var specialxter = confirm("Would you like to include special characters letter?")

//using if statements to select random upper/lowercased alphabets, numeric and special charaters.
if(includeuppercase){
  password += getRandom(upperCasedCharacters)
  passwordOPtions +=upperCasedCharacters.join("") 
} //.join  is used to join the selected elements into an array.
if(includelowercase){
  password += getRandom(lowerCasedCharacters)
  passwordOPtions +=lowerCasedCharacters.join("")
}
if(includenumbers){
  password += getRandom(numericCharacters)
  passwordOPtions +=numericCharacters.join("")
}
if(specialxter){
  password += getRandom(specialCharacters)
  passwordOPtions +=specialCharacters.join("")
}

//create a for loop for the password and the preselected passwordoptions.
for(var i=password.length; i<length; i++){
  password+= getRandom(passwordOPtions)
}
return password 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);