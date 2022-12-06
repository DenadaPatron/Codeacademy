// const password = 'sveikaskrabaskebabas#########################';
// const cleanedPassword = password.trim().replaceAll(' ','');
// const passwordLength = cleanedPassword.length;
// const hasSpecialSymbol = cleanedPassword.includes('#');
// console.log(passwordLength);
// console.log(hasSpecialSymbol);

// if (hasSpecialSymbol === true){
// if (passwordLength < 16){
//     console.log('per trumpas');
// }else{
//     if (passwordLength > 20){
//         console.log('slaptazodis geras!');
//     } else {
//         console.log('tinkamas bet galetu buti ir ilgesnis');
//     }

// } 
// }else {
//     console.log('slaptazodis netinkamas.');
// }

// let cA1 = 123;
// let cA2 = 'star';

// let pA1 = 12333333;
// let pA2 = 'star';

// if (cA1 == pA1 && cA2 == pA2){
//     console.log('teisingai atsakete i abu klausimus, vaziuojam toliau');
// }
// else if (cA1 == pA1 || cA2 == pA2) {
//     if (cA1 == pA1){
//         console.log('teisingai atsaket i pirma klausima');
//     }
//     else if (cA2 == pA2) {
//         console.log('teisingai atsaket i antra klausima');
//     }
// }
// else {
//     console.log('dar pasimokykite - pralaimejote');
// }


// let cA3 = 666;
// let cA4 = 'mergele';

// let pA3 = 666;
// let pA4 = 'undinele';

// if (cA3 == pA3 || cA4 == pA4) {
//  console.log('atsakete teisingai i bent viena');
// } 
// if (cA3 == pA3) {
//     console.log('teisingai atsaket i pirma');
// }


// cA1 = 111;
// cA2 = 222;
// cA3 = 333;

// pA1 = 1111;
// pA2 = 2221;
// pA3 = 333;

// if (cA1 == pA1 && cA2 == pA2 && cA3 == pA3) {
//     console.log('atsakei teisingai i viska - vazhiuoem toliau');
// } else if (cA1 == pA1 && cA2 == pA2 && cA3 != pA3) {
//     console.log('patekai. pirmas ir antras teisingi, trecias ne.');
// } else if (cA1 == pA1 && cA2 != pA2 && cA3 == pA3) {
//     console.log('patekai. pirmas ir trecias teisingi, antras ne.');
// } else if (cA1 != pA1 && cA2 == pA2 && cA3 == pA3) {
//     console.log('patekai. antras ir trecias teisingi, pirmas ne.');
// } else if (cA1 == pA1 && cA2 != pA2 && cA3 !== pA3) {
//     console.log('teisingai atsakei tik i pirma klausima.');
// } else if (cA1 != pA1 && cA2 == pA2 && cA3 != pA3) {
//     console.log('teisingai atsakei tik i antra klausima.');
// } else  {
//     console.log('teisingai atsakei tik i trecia klausima.');
// }



// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// const personName = 'Tom';
// const isLoggedIn = true;
// const time = 12;
// const isBirthday = false;

// if isLoggedIn = true - console.log(timeOfDay + personName)
// else if console.log(timeOfDay)
// timeOfDayMorning = 'Good Morning';
// timeOfDayAfternoon = 'Good Afternoon';
// timeOfDayEvening = 'Good Evening';

//Jei prisijunges ir nuo penkiu iki dvylikos valandu rasom Good morning tom
// Jei prisijunges ir nuo pirmos iki sesiu rasom Good afternoon tom
// Jei prisijunges ir nuo septyniu iki keturiu rasom Good evening tom 

// const personName = 'Tom';
// const isLoggedIn = true;
// const time = 7;
// const isBirthday = false;
// const greeting = 'and have a great birthday!'
// const morning = 'Good morning TEST';
// const afternoon = 'Good afternoon';
// const evening = 'Good evening';
// if(isLoggedIn) {
//     if(isBirthday === false) {
//         if(time >= 5 && time < 13) {
//             console.log(`${morning},  ${personName}`);
//         } else if(time >= 13 && time < 17) {
//             console.log(`Good Afternoon ${personName}`);
//         } else {
//             console.log(`Good Evening ${personName}`);
//         }
//     } else {
//         if(time >= 5 && time < 13) {
//             console.log(`Good Morning ${personName} ${greeting}`);
//         } else if(time >= 13 && time < 17) {
//             console.log(`Good Afternoon ${personName} ${greeting}`);
//         } else {
//             console.log(`Good Evening ${personName} ${greeting}`);
//         }
//     }    
// } else {
//     if(time >= 5 && time < 13) {
//         console.log(`Good Morning`);
//     } else if(time >= 13 && time < 17) {
//         console.log(`Good Afternoon`);
//     } else {
//         console.log(`Good Evening`);
//     }
// }

// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

// function uzduotis1(start = 1, end = 100, value = 1){
//     for (let i = start; i <= end; i+=value){
//         let answer = i * 2;
//         let output = i + ' * 2 = ' + answer;
//         console.log(output);
//     }
// }

// uzduotis1(1, 100, 20); 



// function uzduotis2(){
//     for (let i = 1; i <= 100; i++){
//         let answer = i * 5;
//         let output = i + ' * 5 = ' + answer;
//         console.log(output);
//     }
// }

// function uzduotis3(){
//     for (let i = 1; i <= 100; i++){
//         let answer = i + 5;
//         let output = i + ' + 5 = ' + answer;
//         console.log(output);
//     }
// }


// function uzduotis4(){
//     for (let i = 1; i <= 100; i++){
//         let answer = i - 2;
//         let output = i + ' - 2 = ' + answer;
//         console.log(output);
//     }
// }


// function uzduotis5(){
//     for (let i = 1; i <= 100; i++){
//         let answer = Math.pow(i, 2);
//         let output = i + ' ^2 = ' + answer;
//         console.log(output);
//     }
// }


// function uzduotis6(){
//     for (let i = 1; i <= 100; i++){
//         let answer = Math.pow(i, 3);
//         let output = i + ' ^3 = ' + answer;
//         console.log(output);
//     }
// }

// function uzduotis7(){
//     for (let i = 100; i >= 1; i--){
//         let answer = i * 2;
//         let output = i + ' * 2 = ' + answer;
//         console.log(output);
//     }
// }


// function uzduotis8(){
//     for (let i = 100; i >= 1; i--){
//         let answer = i * 5;
//         let output = i + ' * 5 = ' + answer;
//         console.log(output);
//     }
// }

// function uzduotis9(){
//     for (let i = 100; i >= 1; i--){
//         let answer = i + 5;
//         let output = i + ' + 5 = ' + answer;
//         console.log(output);
//     }
// }

// function uzduotis10(){
//     for (let i = 100; i >= 1; i--){
//         let answer = i - 2;
//         let output = i + ' - 2 = ' + answer;
//         console.log(output);
//     }
// }

// function uzduotis11(){
//     for (let i = 100; i >= 1; i--){
//         let answer = Math.pow(i, 2);
//         let output = i + ' ^2 = ' + answer;
//         console.log(output);
//     }
// }

// function uzduotis12(){
//     for (let i = 100; i >= 1; i--){
//         let answer = Math.pow(i, 3);
//         let output = i + ' ^3 = ' + answer;
//         console.log(output);
//     }
// }
// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".



// 3 ir 9 „FizzFuzz"
// 5 ir 9 „BuzzFuzz"
// 7 ir 9 „BiffFuzz"
// 3, 5 ir 9 „FizzBuzzFuzz"
// 3, 7 ir 9 „"
// 5, 7 ir 9 „BuzzBiffFuzz"
// 3, 5, 7 ir 9 „FizzBuzzBiffFuzz"

function fizzBuzz(){
    for(let i = 1; i <= 1000; i++) {
        if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0 && i % 9 == 0 && i & 11 == 0) console.log('FizzBuzzBiffFuzzBizz');
        if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0 && i % 9 == 0) console.log('FizzBuzzBiffFuzz');
        if(i % 3 == 0 && i % 5 == 0 && i % 9 == 0 && i % 11 == 0) console.log('FizzBuzzBiffBizz');
        if(i % 5 == 0 && i % 7 == 0 && i % 9 == 0 && i % 11 == 0) console.log('BuzzBiffFuzzBizz');
        if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0) console.log('FizzBuzzBiff');
        if(i % 3 == 0 && i % 5 == 0 && i % 9 == 0) console.log('FizzBuzzFuzz');
        if(i % 3 == 0 && i % 7 == 0 && i % 9 == 0) console.log('FizzBiffFuzz');
        if(i % 5 == 0 && i % 7 == 0 && i % 9 == 0) console.log('BuzzBiffFuzz');
        if(i % 5 == 0 && i % 7 == 0 && i % 11 == 0) console.log('BuzzBiffBizz');
        if(i % 3 == 0 && i % 5 == 0 && i % 11 == 0) console.log('FizzBuzzBizz');
        if(i % 3 == 0 && i % 7 == 0 && i % 11 == 0) console.log('FizzBiffBizz');
        else if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
        else if(i % 3 == 0 && i % 7 == 0) console.log('FizzBiff'); 
        else if(i % 3 == 0 && i % 9 == 0) console.log('FizzFuzz');
        else if(i % 5 == 0 && i % 9 == 0) console.log('BuzzFuzz');
        else if(i % 7 == 0 && i % 11 == 0) console.log('BiffBizz');
        else if(i % 5 == 0 && i % 11 == 0) console.log('BuzzBizz');
        else if(i % 3 == 0 && i % 11 == 0) console.log('FizzBizz');
        else if (i % 11 ==0) console.log ('Bizz');
        else if (i % 9 == 0) console.log('Fuzz');
        else if (i % 7 == 0) console.log('Biff');
        else if (i % 3 == 0) console.log('Fizz');
        else if (i % 5 == 0) console.log('Buzz');
        else console.log(i);
    }
}

//fizzBuzz();


// function fizzBuzz(){

//     for (var i = 1; i <= 10000; i++){

//     let output = "";
//     if(i % 3 == 0) {output += "Fizz";}
//     if(i % 5 == 0) {output += "Buzz";}
//     if(i % 7 == 0) {output += "Biff";}
//     if(i % 9 == 0) {output += "Fuzz";}
//     if(i % 11 == 0) {output += "Bizz";}


//     if (output == "") { output = i;}

//     console.log(output);
//     }
// }

// fizzBuzz();

let animals = ['Dog', 'Frog', 'Horse', 'Elepthant', 'Cow', 'Chicken', 'Bull', 'Cat', 'Rat', 'Bird'];
let cars = ['Toyota', 'Volvo', 'Mistubishi', 'Ferrari', 'Aston Martin', 'Wolksvagen', 'Seat', 'Mercedes'];
let brands = ['Nike', 'Adidas', 'Timberland', 'Converse', 'Puma', 'Versace', 'Dolce Gabana', 'Gucci'];

function listArray(pickArray){
    for (let i = 0; i<pickArray.length; i++){
        console.log(pickArray[i]);

    }
}

listArray(brands);

