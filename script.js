//variables
let darkMode = document.getElementById('toggle-dark'); //dark bright checkbox
let slider = document.getElementById('slider'); //slider
let numberBox = document.getElementById('number'); //numberbox
let toggleButton = Array.from(document.getElementsByClassName('toggle-button'));//toggle buttons
let generate = document.getElementById('generate');//generate Button
let hidden = Array.from(document.getElementsByClassName('hidden'));//hidden part
//::::::::Generate password::::::::
//get the active classes
let lower = document.getElementById('lowercase');
let upper = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');

//get textarea
textArea = document.getElementById('generated');
//password contents
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
const theNumbers = '0123456789';
const theSymbols = '!@#$%^&*()_+-={}[]\:";,./?~<>';

//functions to genearte random of each kind
function generateLower() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function generateUpper() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function generateNumber() {
  return theNumbers[Math.floor(Math.random() * theNumbers.length)];
}

function generateSymbol() {
  return theSymbols[Math.floor(Math.random() * theSymbols.length)];
}
//Array of these functions


//Dark mode
darkMode.addEventListener('change', function () {
  document.body.classList.toggle('dark');
})

//Slider
numberBox.textContent = slider.value;


slider.oninput = function () {
  numberBox.textContent = this.value;
}

//toggle buttons active
toggleButton.forEach(function (element) {
  element.addEventListener('click', () => {
    element.classList.toggle('active')
  })
});

//show on generate click
generate.onclick = () => {
  hidden.forEach(e => {
    e.style.display = "block";
  });
  let lengthofPassword = +slider.value;
  let isLowerChecked = lower.classList.contains('active');
  let isUpperChecked = upper.classList.contains('active');
  let isNumberChecked = numbers.classList.contains('active');
  let isSymbolChecked = symbols.classList.contains('active');

  //array of checed items
  arrChecked = []
  if (isLowerChecked) {
    arrChecked.push(generateLower)
  }
  if (isUpperChecked) {
    arrChecked.push(generateUpper)
  }
  if (isNumberChecked) {
    arrChecked.push(generateNumber)
  }
  if (isSymbolChecked) {
    arrChecked.push(generateSymbol)
  }

  console.log(arrChecked.length)

  let generatedPassword = '';
  // for (let i = 0; i < lengthofPassword; i++) {
  //   // generated.innerText += generateLower();
  //   // console.log(generateLower())

  // }

  count = 0;
  do {
    arrChecked.forEach(function (e) {
      generatedPassword += e()
      // generatedPassword += e();
      count++;
      console.log("count", count)
      console.log("slider value", slider.value)
    })
  } while (count < slider.value)
  console.log(generatedPassword)
  generated.innerText = generatedPassword;

};

let copyText = document.getElementById("copy-text");
// copy to clipboard
copyText.onclick = () => {
  navigator.clipboard.writeText(generated.textContent)
};