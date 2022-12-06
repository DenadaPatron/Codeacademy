// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

console.log('Perimetras: ' + (10 + 10) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 25) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 30) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 35) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 40) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 45) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 50) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 55) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 60) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 120) * 2 + ' m.');

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos kūrimas
// 1. Iniciavimo žodelis (function)
// 2. Funkcijos pavadinimas
// 3. Paprasti skliaustai funkcijos argumentas įrašyti - ()
// 4. Riestiniai skliaustai skirti nurodyti ką funkcija turi atlikti - {}

function hello() {
  console.log('Good evening, John.');
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai - ()

hello();

const h1Element = document.querySelector('h1');

// Funkcija su argumentais (funkcija, kuri turi dinami6kas - besikeičiančias - dalis)
function helloWithName(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}.`;
}

console.log(helloWithName('John', 'Doe'));
h1Element.textContent = helloWithName('Steve', 'Doe');

const greetingText = helloWithName('Doe', 'John');
console.log(greetingText);

h1Element.textContent += greetingText;

function perimeter(width, height, units = 'vnt') {
  const answer = (width + height) * 2;
  const outputText = `Perimetras: ${answer} ${units}.`;
  return outputText;
}

const num1 = 50;
const num2 = 20;
console.log(perimeter(num1, num2, 'm'));
console.log(perimeter(10, 25, 'm'));
console.log(perimeter(10, 28, 'm'));
console.log(perimeter(10, 35, 'cm'));
console.log(perimeter(10, 40, 'cm'));
console.log(perimeter(10, 50, 'mm'));
console.log(perimeter(10, 60, 'mm'));
console.log(perimeter(10, 60));

function area(width, height, units = 'vnt') {
  const answer = width * height;
  const outputText = `Stačiakampio plotas yra ${answer} kv. ${units}.`;
  return outputText;
}

console.log(area(10, 50, 'm'));
console.log(area(8, 4, 'cm'));
console.log(area(7.8, 2.45, 'km'));

function allInfo(width, height, units = 'vnt') {
  const perimeterText = perimeter(width, height, units);
  const areaText = area(width, height, units);

  return perimeterText + ' ' + areaText;
}

const allInfoOutput = allInfo(20, 20, 'cm');
console.log(allInfoOutput);

function greeting(personName, isLoggedIn, time, isBirthday) {
  let greetingText = '';
  let nameText = (isLoggedIn && personName) ? ', ' + personName : '';
  let birthdayText = (isBirthday && isLoggedIn) ? 'and have a great birthday!' : '';
  let output = '';

  if (time >= 5 && time <= 12) {
    greetingText = 'Good Morning';
  } else if (time >= 13 && time <= 18) {
    greetingText = 'Good Afternoon';
  } else if (time >= 19 && time <= 23 || time >= 0 && time <= 4) {
    greetingText = 'Good Evening';
  } else {
    greetingText = 'Hello';
  }

  output = `${greetingText}${nameText} ${birthdayText}`;

  return output;
}

const greetingOutput = greeting('Steve', true, 19, true);
console.log(greetingOutput);


function gradeToText(grade) {
  let h3Element = document.querySelector('h3');

  switch (true) {
    case grade > 0 && grade <= 10:
      gradeOutput = 'Labai blogai';
      h3Element.style.background = 'red';
      break;
    case grade <= 20:
      gradeOutput = 'Blogai';
      h3Element.style.background = 'orange';
      break;
    case grade <= 30:
      gradeOutput = 'Vidutiniškai';
      h3Element.style.background = 'brown';
      break;
    case grade <= 40:
      gradeOutput = 'Gerai';
      h3Element.style.background = 'yellow';
      h3Element.style.color = 'black';
      break;
    case grade <= 50:
      gradeOutput = 'Puikiai';
      h3Element.style.background = 'green';
      h3Element.style.textTransform = 'uppercase';
      break;
    default:
      gradeOutput = 'Įvestas netinkamas skaičius';
      h3Element.style.background = 'red';
      break;
  }
  
  h3Element.textContent = gradeOutput;
}

gradeToText(51);