// Alerts user on 1st button click

let blueButton = document.getElementById('blue-button');

alertUser = () => {alert ('Hello World!')};

blueButton.addEventListener('click' , alertUser);


// Changes placeholder text as requested per buttons

let upperCaseButton = document.getElementById('upper-case');
let lowerCaseButton = document.getElementById('lower-case');
let firstUpperCaseButton = document.getElementById('first-upper-case'); 
let firstLowerCaseButton =  document.getElementById('first-lower-case');
let editableArea = document.getElementById("registry-changer");

function amendUpperCase(){
    editableArea.value = editableArea.value.toUpperCase();
}

function amendLowerCase(){
    editableArea.value = editableArea.value.toLowerCase();
}

function amendfirstUpperCase(){
    editableArea.value = editableArea.value.charAt(0).toUpperCase() + editableArea.value.slice(1);
}

function amendfirstLowerCase(){
    editableArea.value = editableArea.value.charAt(0).toLowerCase() + editableArea.value.slice(1);
}


upperCaseButton.addEventListener('click' , amendUpperCase);
lowerCaseButton.addEventListener('click' , amendLowerCase);
firstUpperCaseButton.addEventListener('click' , amendfirstUpperCase);
firstLowerCaseButton.addEventListener('click' , amendfirstLowerCase);

// console.log(editableArea.value);


// E-mail & Phone number validity checker 


//Define variables 
const emailField = document.getElementById("input-email");
const emailError = document.getElementById("validate-email");
const numberField = document.getElementById("input-number");
const numberError = document.getElementById("validate-number");
const saveButton = document.getElementById("save-button");

// checks if e-mail is longer than 5 symbols.
function validateEmail(input){
    if (input.value.length > 5){
        return true;
    }
    else {
        return false;
    }
    
}
//checks if number is longer than 9 symbols.
function validateNumber(input){
    if (input.value.length > 9){
        return true;
    }
    else {
        return false;
    }
}



function validateForErrors(){
    // if email isnt longer than 5 symbols prompt warning & highlight field
    if (!validateEmail(emailField)) {
        emailError.removeAttribute("hidden");
        emailField.classList.add("border-danger");

    }
    // if number isnt longer than 5 symbols prompt warning
    if(!validateNumber(numberField)){
        numberError.removeAttribute("hidden");
        numberField.classList.add("border-danger");
    }

}
 
saveButton.addEventListener('click' , validateForErrors);

// Block input 

let input = document.getElementById('input');
let blockButton = document.getElementById('block-button');
let unblockButton = document.getElementById('unblock-button');

blockField = () => {
    input.disabled = true;
}

unblockField = () => {
    input.disabled = false;
}

blockButton.addEventListener('click' , blockField);
unblockButton.addEventListener('click' , unblockField);

// Image changer

let frame = document.getElementById('image-frame');
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');


changeImage1 = () => {
    frame.src = 'https://i.imgur.com/0DElr0H.jpg';
}

changeImage2 = () => {
    frame.src = 'https://i.imgur.com/PLDVxza.jpg';
}


imageOne.addEventListener('mouseover', changeImage1);
imageTwo.addEventListener('mouseover', changeImage2);


// Quote updater
// cursor dropdown
let quote = document.getElementById('quote');

let cursorEvents = [...document.getElementById('cursor-dropdown').children];
cursorEvents.forEach(cursorItem => {
    cursorItem.addEventListener('click', () => {
        return quote.style.cursor = cursorItem.firstChild.text;
    })
}) 
// colors dropdown
let colorEvents = [...document.getElementById('color-dropdown').children];

colorEvents.forEach(colorSelection => {
    colorSelection.addEventListener('click', () => {
        return quote.style.color = colorSelection.firstChild.text;
    })
})
// borders dropdown
let borderEvents = [...document.getElementById('border-dropdown').children];

borderEvents.forEach(borderSelection =>{
    borderSelection.addEventListener('click', () => {
        return quote.style.border = `thick solid ${borderSelection.firstChild.text}`;
    })
})
// reset button
let resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {resetStyle(quote)});

function resetStyle(event) {
    event.style.removeProperty('border');
    event.style.removeProperty('color');
    event.style.removeProperty('cursor');
}




        


