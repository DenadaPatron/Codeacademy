// Kintamųjų kūrimas:
// 1. Iniciavimo žodelis (var, let arba const)
// 2. Pavadinimas
// 3. Lygybės ženklas (=). Jis priskiria kintamąjam reikšmę.
// 4. Kintamojo reikšmė

var vardas = 'John'; // string tipo kintamasis (tekstas)
let pavarde = "Doe"; // string tipo kintamasis (tekstas)
let miestas = `Klaipėda`;
let amzius = 20;
const asmensKodas = 464646465465; // number tipo kintamasis (skaičius)
let yraPilnametis = true; // boolean tipo kintamasis (true/false)

function testingVariables(vardas, pavarde) {
  console.log(vardas);
  console.log(pavarde);
  console.log(asmensKodas);
  
  // Kintamojo reikšmės keitimas
  vardas = 'John';
  pavarde = 'Doe';
  
  console.log(vardas);
  console.log(pavarde);
  console.log(miestas);
  console.log(asmensKodas);
  
  // Kintamųjų jungimas su string'ais
  console.log("Hello, " + vardas + ", how are you?");
  console.log('Hello, ' + vardas + ', how are you?');
  console.log(`Hello, ${vardas}, how are you?`);
  
  console.log('Jonas pasakė: "Labas vakaras"');
  console.log(`Jonas pasakė: "Labas vakaras"`);
  console.log("John's car");
  console.log(`John's car`);
  
  // `John said`: "That\'s my car".
  console.log(`John said: "That's my car".`);
  console.log('`John said`: "That' + `'s my car".`);
  
  console.log("John said: \"That's my car\".");
  console.log('John said: "That\'s my car".');
  console.log('`John said`: "That\'s my car".');
  console.log('`John said`: "That\\\'s my car".');
  
  // John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.
  
  console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.');
  console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".");
  console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`);
}

testingVariables(vardas, pavarde);

// MATEMATINIAI OPERATORIAI
let num1 = 10;
let num2 = '10';
let num3 = 22;

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num3 % num1);

console.log(num2 + num3);
console.log(num2 - num3);
console.log(num2 * num3);
console.log(num2 / num3);
console.log(num2 % num3);

console.log((num1 + num3) * 2);

// SĄLYGOS

// Dviguba lygybė (loosely Equal ==): tikrina tik reikšmes. Ir nekreipia dėmesio į duomenų tipą. 
console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log('10' == 10); // true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina duomenų tipą ir tik jeigu duomenų tipas sutampa, tada tikrina jų reikšmes.
console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log('10' === 10); // false

console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

console.log(10 == 10); // true
console.log(10 != 10); // false

console.log(10 === 10); // true
console.log(10 !== 10); // false

console.log('10' == 10); // true
console.log('10' != 10); // false

console.log('10' === 10); // false
console.log('10' !== 10); // true

console.log(true);
console.log(!true);
console.log(!!true);

// IF, ELSE IF, ELSE
console.log('----------IF, ELSE IF, ELSE----------');

// let light = 'GrEeN';

// // OR (||) operatorius - AR operatorius

// if (light === 'green' || light === 'GREEN' || light === 'GrEeN') {
//   console.log('Galima eiti');
// } else if (light === 'yellow') {
//   console.log('Pasiruošk');
// } else if (light === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedo');
// }

let originalLight = 'GreeN';
let light = originalLight.toLowerCase();

if (light === 'green') {
  console.log('Galima eiti');
} else if (light === 'yellow') {
  console.log('Pasiruošk');
} else if (light === 'red') {
  console.log('STOP');
} else {
  console.log('Sugedo');
}

// LOTERIJOS BILIETAS
let age = 25;

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age > 17) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age < 18) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

// if (age <= 17) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

age = 6;

// AND (&&) operator - IR operatorius

// if (age < 0) {
//   console.log('Amzius per mazas');
// } else if (age >= 0 && age < 16) {
//   console.log('Pirkti negalima');
// } else if (age >= 16 && age < 18) {
//   console.log('Pirkti galima su tevu sutikimu');
// } else if (age >= 18 && age < 120) {
//   console.log('Galima pirkti')
// } else {
//   console.log('Amzius per didelis');
// }

if (age < 0) {
  console.log('Amzius per mazas');
} else if (age < 16) {
  console.log('Pirkti negalima');
} else if (age < 18) {
  console.log('Pirkti galima su tevu sutikimu');
} else if (age < 120) {
  console.log('Galima pirkti')
} else {
  console.log('Amzius per didelis');
}


// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

let personAge = Number('6');

if (isNaN(personAge)) {
  console.log('Reikia įvesti skaičių');
} else if (personAge < 0) {
  console.log('Amzius privalo buti teigiamas skaicius');
} else if (personAge < 6) {
  console.log('I mokykla neina')
} else if (personAge < 7) {
  console.log('Gali eiti i pirma klase')
} else if (personAge < 10) {
  console.log('Pradinukas')
} else if (personAge < 11) {
  console.log('Pradinukas, bet gal ir penktokas');
} else if (personAge < 14) {
  console.log('Pagrindine')
} else if (personAge < 15) {
  console.log('Pagrindine, bet gal ir devintokas');
} else if (personAge < 18) {
  console.log('Gimnazija');
} else if (personAge < 19) {
  console.log('Gimnazija, bet gal ir baige');
} else if (personAge < 120) {
  console.log('Mokykla baige')
} else {
  console.log('Amzius per didelis');
}

// SLAPTAŽODIS

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

const password = '            a#s                 d                              ';
const cleanedPassword = password.trim().replaceAll(' ', '');
const passwordLength = cleanedPassword.length;
const hasSpecialSymbol = cleanedPassword.includes('#');

console.log(passwordLength);
console.log(hasSpecialSymbol);

// if (passwordLength < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// } else if (passwordLength < 21) {
//   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
// } else {
//   console.log('Slaptažodis tinkamas');
// }

if (hasSpecialSymbol) {
  if (passwordLength < 16) {
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
  } else {
    if (passwordLength > 20) {
      console.log('Slaptažodis tinkamas');
    } else {
      console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
    }
  }
} else {
  console.log('Slaptažodis yra netinkamas.');
}

// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS: 
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// Kiek bus 123 + 456 = 579
let correctAnswer1 = 579;
// Kaip vadinimas arčiausiai Žemės esanti žvaigždė? Sun
let correctAnswer2 = 'sun';

let playerAnswer1 = 579;
let playerAnswer2 = 'moon';

// if (playerAnswer1 === correctAnswer1 && playerAnswer2 === correctAnswer2) {
//   console.log('Patekai į kitą etapą: abu atsakymai teisingi');
// } else if (playerAnswer1 === correctAnswer1 && playerAnswer2 !== correctAnswer2) {
//   console.log('Patekai į kitą etapą: tačiau antras atsakymas buvo neteisingas');
// } else if (playerAnswer1 !== correctAnswer1 && playerAnswer2 === correctAnswer2) {
//   console.log('Patekai į kitą etapą: tačiau pirmas atsakymas buvo neteisingas');
// } else {
//   console.log('Į kitą etapą nepatekai: abu atsakymai neteisingi :(');
// }

if (playerAnswer1 === correctAnswer1 && playerAnswer2 === correctAnswer2) {
  console.log('Patekai į kitą etapą: abu atsakymai teisingi');
} else if (playerAnswer1 === correctAnswer1) {
  console.log('Patekai į kitą etapą: tačiau antras atsakymas buvo neteisingas');
} else if (playerAnswer2 === correctAnswer2) {
  console.log('Patekai į kitą etapą: tačiau pirmas atsakymas buvo neteisingas');
} else {
  console.log('Į kitą etapą nepatekai: abu atsakymai neteisingi :(');
}

// ANTRAS LYGIS:

// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

let cAnswer1 = 1;
let cAnswer2 = 1;

let pAnswer1 = 0;
let pAnswer2 = 0;

// if (cAnswer1 === pAnswer1 || cAnswer2 === pAnswer2) {
//   if (cAnswer1 === pAnswer1 && cAnswer2 === pAnswer2) {
//     console.log('Abu teisingi');
//   } else if (cAnswer1 === pAnswer1) {
//     console.log('Pirmas teisingas, antras neteisingas');
//   } else {
//     console.log('Antras teisingas, pirmas neteisingas');
//   }
// } else {
//   console.log('Abu neteisingi');
// }

if (pAnswer1 === cAnswer1 && pAnswer2 === cAnswer2) {
  console.log('Patekai į kitą etapą: abu atsakymai teisingi');
} else if (pAnswer1 === cAnswer1) {
  console.log('Nepatekai į kitą etapą: tačiau pirmas atsakymas buvo teisingas');
} else if (pAnswer2 === cAnswer2) {
  console.log('Nepatekai į kitą etapą: tačiau antras atsakymas buvo teisingas');
} else {
  console.log('Į kitą etapą nepatekai: abu atsakymai neteisingi :(');
}

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// let cAnswer31 = 1;
// let cAnswer32 = 1;
// let cAnswer33 = 1;

// let pAnswer31 = 1;
// let pAnswer32 = 1;
// let pAnswer33 = 1;

// PIRMAS BŪDAS
// if (cAnswer31 === pAnswer31 && cAnswer32 === pAnswer32 && cAnswer33 === pAnswer33) {
//   console.log('Patekai i kita etapa: visi atsakymai teisingi.');
// } else if (cAnswer31 !== pAnswer31 && cAnswer32 === pAnswer32 && cAnswer33 === pAnswer33) {
//   console.log('Patekai i kita etapa: taciau pirmas atsakymas buvo neteisingas.');
// } else if (cAnswer31 === pAnswer31 && cAnswer32 !== pAnswer32 && cAnswer33 === pAnswer33) {
//   console.log('Patekai i kita etapa: taciau antras atsakymas buvo neteisingas.');
// } else if (cAnswer31 === pAnswer31 && cAnswer32 === pAnswer32 && cAnswer33 !== pAnswer33) {
//   console.log('Patekai i kita etapa: taciau trecias atsakymas buvo neteisingas.');
// } else if (cAnswer31 === pAnswer31 && cAnswer32 !== pAnswer32 && cAnswer33 !== pAnswer33) {
//   console.log('Nepatekai i kita etapa: taciau pirmas atsakymas buvo teisingas.');
// } else if (cAnswer31 !== pAnswer31 && cAnswer32 === pAnswer32 && cAnswer33 !== pAnswer33) {
//   console.log('Nepatekai i kita etapa: taciau antras atsakymas buvo teisingas.');
// } else if (cAnswer31 !== pAnswer31 && cAnswer32 !== pAnswer32 && cAnswer33 === pAnswer33) {
//   console.log('Nepatekai i kita etapa: taciau trecias atsakymas buvo teisingas.');
// } else {
//   console.log('Nepatekai i kita etapa: nei vienas atsakymas nebuvo teisingas.');
// }

// ANTRAS BŪDAS
// if (cAnswer31 === pAnswer31 && cAnswer32 === pAnswer32 && cAnswer33 === pAnswer33) {
//   console.log('Patekai i kita etapa: visi atsakymai teisingi.');
// } else if (cAnswer32 === pAnswer32 && cAnswer33 === pAnswer33) {
//   console.log('Patekai i kita etapa: taciau pirmas atsakymas buvo neteisingas.');
// } else if (cAnswer31 === pAnswer31 && cAnswer33 === pAnswer33) {
//   console.log('Patekai i kita etapa: taciau antras atsakymas buvo neteisingas.');
// } else if (cAnswer31 === pAnswer31 && cAnswer32 === pAnswer32) {
//   console.log('Patekai i kita etapa: taciau trecias atsakymas buvo neteisingas.');
// } else if (cAnswer31 === pAnswer31) {
//   console.log('Nepatekai i kita etapa: taciau pirmas atsakymas buvo teisingas.');
// } else if (cAnswer32 === pAnswer32) {
//   console.log('Nepatekai i kita etapa: taciau antras atsakymas buvo teisingas.');
// } else if (cAnswer33 === pAnswer33) {
//   console.log('Nepatekai i kita etapa: taciau trecias atsakymas buvo teisingas.');
// } else {
//   console.log('Nepatekai i kita etapa: nei vienas atsakymas nebuvo teisingas.');
// }

// TREČIAS BŪDAS
let cAnswer31 = 1;
let cAnswer32 = 1;
let cAnswer33 = 1;

let pAnswer31 = 0;
let pAnswer32 = 1;
let pAnswer33 = 1;

let answer1 = (cAnswer31 === pAnswer31);
let answer2 = (cAnswer32 === pAnswer32);
let answer3 = (cAnswer33 === pAnswer33);

let outputText = '';
let successText = 'Patekai į kitą etapą:';
let failText = 'Nepatekai į kitą etapą:';

if (answer1 && answer2 && answer3) {
  outputText = successText + ' visi atsakymai teisingi.';
} else if (answer2 && answer3) {
  outputText = successText + ' tačiau pirmas atsakymas buvo neteisingas.';
} else if (answer1 && answer3) {
  outputText = successText + ' tačiau antras atsakymas buvo neteisingas.';
} else if (answer1 && answer2) {
  outputText = successText + ' tačiau trečias atsakymas buvo neteisingas.';
} else if (answer1) {
  outputText = failText = ' tačiau pirmas atsakymas buvo teisingas.';
} else if (answer2) {
  outputText = failText = ' tačiau antras atsakymas buvo teisingas.';
} else if (answer3) {
  outputText = failText = ' tačiau trečias atsakymas buvo teisingas.';
} else {
  outputText = failText = ' nei vienas atsakymas nebuvo teisingas.';
}

console.log(outputText);
document.querySelector('h2').textContent = outputText;




let num = 5;
console.log(num);
console.log(num + 1);
console.log(num);

num = 6;
console.log(num);

// Sudėtis (skaičiai)
num = num + 1;
console.log(num);

num += 1;
console.log(num);

num++;
console.log(num);

num = num + 2;
console.log(num);

num += 2;
console.log(num);

// Sudėtis (string)
let str = 'Labas';
console.log(str);

str = str + ' vakaras';
console.log(str);

str += '.';
console.log(str);

// str++;
// console.log(str);

// Atimtis
num = num - 1;
console.log(num);

num -= 1;
console.log(num);

num--;
console.log(num);

num = num - 2;
console.log(num);

num -= 2;
console.log(num);

// Dalyba
num = num / 2;
console.log(num);

num /= 2;
console.log(num);

// Daugyba
num = num * 2;
console.log(num);

num *= 2;
console.log(num);

// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"


// PIRMAS BŪDAS
// const personName = '';
// const isLoggedIn = true;
// const time = 15;
// const isBirthday = true;
// let output = '';
// if (time >= 5 && time <= 12) {
//   output = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   output = 'Good Afternoon';
// } else if (time >= 19 && time <= 23 || time >= 0 && time <= 4) {
//   output = 'Good Evening';
// } else {
//   output = 'Hello';
// }

// if (isLoggedIn && personName) {
//   // output = output + ', ' + personName;
//   output += ', ' + personName;
// }

// if (isBirthday && isLoggedIn) {
//   output += ' and have a great birthday!';
// }

// console.log(output);

// ANTRAS BŪDAS
// const personName = 'Tom';
// const isLoggedIn = true;
// const time = 15;
// const isBirthday = true;
// let greetingText = '';
// let nameText = '';
// let birthdayText = '';
// let output = '';

// if (time >= 5 && time <= 12) {
//   greetingText = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   greetingText = 'Good Afternoon';
// } else if (time >= 19 && time <= 23 || time >= 0 && time <= 4) {
//   greetingText = 'Good Evening';
// } else {
//   greetingText = 'Hello';
// }

// if (isLoggedIn && personName) {
//   nameText = ', ' + personName;
// }

// if (isBirthday && isLoggedIn) {
//   birthdayText = 'and have a great birthday!';
// }

// output = `${greetingText}${nameText} ${birthdayText}`;

// console.log(output);

// TREČIAS BŪDAS
const personName = 'Tom';
const isLoggedIn = true;
const time = 15;
const isBirthday = true;
let greetingText = '';
let nameText = (isLoggedIn && personName) ? ', ' + personName : '';
let birthdayText = (isBirthday && isLoggedIn) ? 'and have a great birthday!' : '';
let output = '';

// if (time >= 5 && time <= 12) {
//   greetingText = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   greetingText = 'Good Afternoon';
// } else if (time >= 19 && time <= 23 || time >= 0 && time <= 4) {
//   greetingText = 'Good Evening';
// } else {
//   greetingText = 'Hello';
// }

switch (time) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    greetingText = 'Good Evening';
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    greetingText = 'Good Morning';
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
    greetingText = 'Good Afternoon';
    break;
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    greetingText = 'Good Evening';
    break;
  default: 
    greetingText = 'Hello';
    break;
}

output = `${greetingText}${nameText} ${birthdayText}`;

console.log(output);


// Sukurti vertinimo sistemą, kuri skaitinį vertinimą paverčia į žodžius:
// 1 - Labai blogai
// 2 - Blogai
// 3 - Vidutiniškai
// 4 - Gerai
// 5 - Puikiai
// Vertinimą reikia įvesti per prompt.

// const grade = 5;
// let gradeOutput = '';
// const h3Element = document.querySelector('h3');

// if (grade === 1) {
//   gradeOutput = 'Labai blogai';
// } else if (grade === 2) {
//   gradeOutput = 'Blogai';
// } else if (grade === 3) {
//   gradeOutput = 'Vidutiniškai';
// } else if (grade === 4) {
//   gradeOutput = 'Gerai';
// } else if (grade === 5) {
//   gradeOutput = 'Puikiai';
// } else {
//   gradeOutput = 'Įvestas netinkamas skaičius';
// }

// h3Element.textContent = gradeOutput;


// SWITCH
let grade = 38;
const h3Element = document.querySelector('h3');

h3Element.style.color = 'white';
h3Element.style.padding = '15px';
h3Element.style.fontSize = '50px';
h3Element.style.textAlign = 'center';

let gradeOutput = '';

// switch (grade) {
//   case 1:
//   case 2:
//     gradeOutput = 'Labai blogai';
//     h3Element.style.background = 'red';
//     break;
//   case 3:
//   case 4:
//     gradeOutput = 'Blogai';
//     h3Element.style.background = 'orange';
//     break;
//   case 5:
//   case 6:
//     gradeOutput = 'Vidutiniškai';
//     h3Element.style.background = 'brown';
//     break;
//   case 7:
//   case 8:
//     gradeOutput = 'Gerai';
//     h3Element.style.background = 'yellow';
//     h3Element.style.color = 'black';
//     break;
//   case 9:
//   case 10:
//     gradeOutput = 'Puikiai';
//     h3Element.style.background = 'green';
//     h3Element.style.textTransform = 'uppercase';
//     break;
//   default:
//     gradeOutput = 'Įvestas netinkamas skaičius';
//     h3Element.style.background = 'red';
//     break;
// }


// switch (grade) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     gradeOutput = 'Labai blogai';
//     h3Element.style.background = 'red';
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:
//     gradeOutput = 'Blogai';
//     h3Element.style.background = 'orange';
//     break;
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:
//     gradeOutput = 'Vidutiniškai';
//     h3Element.style.background = 'brown';
//     break;
//   case 31:
//   case 32:
//   case 33:
//   case 34:
//   case 35:
//   case 36:
//   case 37:
//   case 38:
//   case 39:
//   case 40:
//     gradeOutput = 'Gerai';
//     h3Element.style.background = 'yellow';
//     h3Element.style.color = 'black';
//     break;
//   case 41:
//   case 42:
//   case 43:
//   case 44:
//   case 45:
//   case 46:
//   case 47:
//   case 48:
//   case 49:
//   case 50:
//     gradeOutput = 'Puikiai';
//     h3Element.style.background = 'green';
//     h3Element.style.textTransform = 'uppercase';
//     break;
//   default:
//     gradeOutput = 'Įvestas netinkamas skaičius';
//     h3Element.style.background = 'red';
//     break;
// }

grade = 21;

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