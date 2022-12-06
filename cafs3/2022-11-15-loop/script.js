// console.log('- ' + 1 + '!!!');
// console.log('- ' + 2 + '!!!');
// console.log('- ' + 3 + '!!!');
// console.log('- ' + 4 + '!!!');
// console.log('- ' + 5 + '!!!');
// console.log('- ' + 6 + '!!!');
// console.log('- ' + 7 + '!!!');
// console.log('- ' + 8 + '!!!');
// console.log('- ' + 9 + '!!!');
// console.log('- ' + 10 + '!!!');
// console.log('- ' + 11 + '!!!');
// console.log('- ' + 12 + '!!!');
// console.log('- ' + 13 + '!!!');
// console.log('- ' + 14 + '!!!');
// console.log('- ' + 15 + '!!!');
// console.log('- ' + 16 + '!!!');
// console.log('- ' + 17 + '!!!');
// console.log('- ' + 18 + '!!!');
// console.log('- ' + 19 + '!!!');
// console.log('- ' + 20 + '!!!');

function count(num) {
  console.log('- ' + num + '!');
}

// count(1);
// count(2);
// count(3);
// count(4);
// count(5);
// count(6);
// count(7);
// count(8);
// count(9);
// count(10);
// count(11);
// count(12);
// count(13);
// count(14);
// count(15);
// count(16);
// count(17);
// count(18);
// count(19);
// count(20);

// let num = 1;
// console.log(num);
// num = num + 1;
// console.log(num);
// num += 1;
// console.log(num);
// num++;
// console.log(num);
// num++;
// console.log(num);
// num++;
// console.log(num);

// FOR LOOP / FOR CIKLAS
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kinatamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo keitimas
// 3. Riestiniai skliaustai - {}

/**

for (kintamasis; sąlyga; kintamojo keitimas) {
  ....
}

*/

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

function loop() {
  for (let i = 1; i <= 100; i++) {
    // console.log('- ' + i + '!');
    count(i);
  }
}
// loop();


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.

function task1(start = 1, end = 100) {
  for (let i = start; i <= end; i++) {
    // console.log(i + ' * 2 = ' + i * 2);
    // console.log(`${i} * 2 = ${i * 2}`);

    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
  }
}
// task1(10, 50, 5);
function task11(start = 100, end = 1) {
  for (let i = start; i >= end; i--) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
  }
}

// task11();

// 2. Padaugina skaičių iš 5.
function task2(start, end) {
  for (let i = start; i <= end; i++) {
    let answer = i * 5;
    let output = `${i} * 5 = ${answer}`;
    console.log(output);
  }
}
// task2(1345, 1485);

function task21(start = 100, end = 1) {
  for (let i = start; i >= end; i--) {
    let answer = i * 5;
    let output = `${i} * 5 = ${answer}`;
    console.log(output);
  }
}
// task21();

// 3. Prideda prie skaičiaus 5.
function task3(start, end) {
  for (let i = start; i <= end; i++) {
    let answer = i + 5;
    let output = `${i} + 5 = ${answer}`;
    console.log(output);
  }
}
// task3(15, 155);

function task3(start = 100, end = 1) {
  for (let i = start; i >= end; i--) {
    let answer = i + 5;
    let output = `${i} + 5 = ${answer}`;
    console.log(output);
  }
}
// task3();

// 4. Atima iš skaičiaus 2.
function task4(start, end) {
  for (let i = start; i <= end; i++) {
    let answer = i - 2;
    let output = `${i} - 2 = ${answer}`;
    console.log(output);
  }
}

// task4(15, 34);
function task41(start = 100, end = 1) {
  for (let i = start; i >= end; i--) {
    let answer = i - 2;
    let output = `${i} - 2 = ${answer}`;
    console.log(output);
  }
}
// task41();

// 5. Pakelia skaičių kvadratu.
function task5(start, end) {
  for (let i = start; i <= end; i++) {
    let answer = i * i;
    let output = `${i} ^2 = ${answer}`;
    console.log(output);
  }
}

// task5(15, 34);
function task51(start = 100, end = 1) {
  for (let i = start; i >= end; i--) {
    let answer = i * i;
    let output = `${i} ^2 = ${answer}`;
    console.log(output);
  }
}
// task51();

// 6. Pakelia skaičių kūbu.
function task6(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i = i + nth) {
    // let answer = Math.pow(i, 3);
    let answer = i**3;
    let output = `${i} ^3 = ${answer}`;
    console.log(output);
  }
}
// task6(1, 100, 10);

function task61(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i-=nth) {
    let answer = i**3;
    let output = `${i} ^3 = ${answer}`;
    console.log(output);
  }
}
// task61(555, 55, 50);


// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i+=10) {
//   console.log(i);
// }


// FIZZ BUZZ UŽDUOTIS:
// Sukurti FizzBuzz žaidimo funkciją ir išvesti į ekraną išvesti:
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

function fizzBuzz1(start = 1, end = 100) {
  for(let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz1(150, 500);

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 3 ir 7 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 5 ir 7 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 3, iš 5 ir iš 7 turi būti pakeisti į žodį „FizzBuzzBiff";

// function fizzBuzz2(start = 1, end = 100) {
//   for(let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//       console.log('FizzBuzzBiff');
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0 && i % 7 === 0) {
//       console.log('FizzBiff');
//     } else if (i % 5 === 0 && i % 7 === 0) {
//       console.log('BuzzBiff');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else if (i % 7 === 0) {
//       console.log('Biff');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz2(1, 250);


// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

// 3 ir 9 „FizzFuzz"
// 5 ir 9 „BuzzFuzz"
// 7 ir 9 „BiffFuzz"
// 3, 5 ir 9 „FizzBuzzFuzz"
// 3, 7 ir 9 „"
// 5, 7 ir 9 „BuzzBiffFuzz"
// 3, 5, 7 ir 9 „FizzBuzzBiffFuzz"

// function fizzBuzz3(start = 1, end = 100) {
//   for(let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
//       console.log('FizzBuzzBiffFuzz');
//     } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//       console.log('FizzBuzzBiff');
//     } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
//       console.log('FizzBuzzFuzz');
//     } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
//       console.log('FizzBiffFuzz');
//     } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
//       console.log('BuzzBiffFuzz');
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0 && i % 7 === 0) {
//       console.log('FizzBiff');
//     } else if (i % 5 === 0 && i % 7 === 0) {
//       console.log('BuzzBiff');
//     } else if (i % 3 === 0 && i % 9 === 0) {
//       console.log('FizzFuzz');
//     } else if (i % 5 === 0 && i % 9 === 0) {
//       console.log('BuzzFuzz');
//     } else if (i % 7 === 0 && i % 9 === 0) {
//       console.log('BiffFuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else if (i % 7 === 0) {
//       console.log('Biff');
//     } else if (i % 9 === 0) {
//       console.log('Fuzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz3(1, 1000);

// 3 5 7 9 11
// 3 5 7 11
// 3 5 9 11
// 3 7 9 11
// 5 7 9 11
// 3 5 11
// 3 7 11
// 3 9 11
// 5 7 11
// 5 9 11
// 7 9 11
// 3 11
// 5 11
// 7 11
// 9 11
// 11

// function fizzBuzz4(start = 1, end = 100) {
//   for(let i = start; i <= end; i++) {
//     const fizz = i % 3 === 0;
//     const buzz = i % 5 === 0;
//     const biff = i % 7 === 0;
//     const fuzz = i % 9 === 0;

//     let output = '';

//     if (fizz && buzz && biff && fuzz) {
//       output = 'FizzBuzzBiffFuzz';
//     } else if (fizz && buzz && biff) {
//       output = 'FizzBuzzBiff';
//     } else if (fizz && buzz && fuzz) {
//       output = 'FizzBuzzFuzz';
//     } else if (fizz && biff && fuzz) {
//       output = 'FizzBiffFuzz';
//     } else if (buzz && biff && fuzz) {
//       output = 'BuzzBiffFuzz';
//     } else if (fizz && buzz) {
//       output = 'FizzBuzz';
//     } else if (fizz && biff) {
//       output = 'FizzBiff';
//     } else if (buzz && biff) {
//       output = 'BuzzBiff';
//     } else if (fizz && fuzz) {
//       output = 'FizzFuzz';
//     } else if (buzz && fuzz) {
//       output = 'BuzzFuzz';
//     } else if (biff && fuzz) {
//       output = 'BiffFuzz';
//     } else if (fizz) {
//       output = 'Fizz';
//     } else if (buzz) {
//       output = 'Buzz';
//     } else if (biff) {
//       output = 'Biff';
//     } else if (fuzz) {
//       output = 'Fuzz';
//     } else {
//       output = i;
//     }

//     console.log(i + '. ' + output);
//   }
// }

// fizzBuzz4(1, 1000);


// function fizzBuzz5(start = 1, end = 100) {
//   for(let i = start; i <= end; i++) {
//     let output = '';

//     if (i % 3 === 0) {
//       output += 'Fizz';
//     }

//     if (i % 5 === 0) {
//       output += 'Buzz';
//     }

//     if (i % 7 === 0) {
//       output += 'Biff';
//     }

//     if (i % 9 === 0) {
//       output += 'Fuzz';
//     }

//     if (i % 11 === 0) {
//       output += 'Bizz';
//     }

//     if (!output) {
//       output = i;
//     }

//     console.log(output);
//   }
// }

// fizzBuzz5(1, 1000);



function fizzBuzz6(start = 1, end = 100) {
  for(let i = start; i <= end; i++) {
    let output = '';

    // i % 3 === 0 && (output += 'Fizz');
    // i % 5 === 0 && (output += 'Buzz');
    // i % 7 === 0 && (output += 'Biff');
    // i % 9 === 0 && (output += 'Fuzz');
    // i % 11 === 0 && (output += 'Bizz');
    // !output && (output = i);

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 13 === 0) output += 'Fazz';
    if (i % 17 === 0) output += 'Juzz';
    if (i % 21 === 0) output += 'Mazz';
    if (!output) output = i;

    console.log(output);
  }
}

fizzBuzz6(1, 1000);

