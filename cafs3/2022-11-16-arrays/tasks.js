// FILTER:
// 1. Sukurti 20-ties skaičių masyvą ir išfiltruoti skaičius, kurie:
let numbers = [4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787, -20, 35];
console.log(numbers);

// 1.1. Yra didesni už 10
// let filteredTask1 = numbers.filter((num) => {
//   console.log(num);
//   console.log(num > 10);
//   return num > 10;
// });

// let filteredTask1 = numbers.filter((num) => {
//   return num > 10;
// });

let filteredTask1 = numbers.filter(num => num > 10);
console.log(filteredTask1);

// 1.2. Yra neigiami
let filteredTask2 = numbers.filter(num => num < 0);
console.log(filteredTask2);

// 1.3. Dalinasi iš 3 arba 5
let filteredTask3 = numbers.filter(num => num % 3 === 0 || num % 5 === 0);
console.log(filteredTask3);

// 1.4. Dalinasi iš 4 ir yra didesni už 13
let filteredTask4 = numbers.filter(num => num % 4 === 0 && num > 13);
console.log(filteredTask4);

// 2. Sukurti 20-ties žodžių masyvą ir išfiltruoti žodžius, kurie:
let words = ['sir', 'entry', 'midnight', 'engine', 'analysis', 'actor', 'indication', 'hospital', 'procedure', 'weakness', 'emphasis', 'basis', 'nation', 'office', 'recording', 'hat', 'pie', 'arrival', 'data', 'departure'];

// 2.1. Baigiasi raide e
// let filteredTask21 = words.filter(word => word.slice(-1) === 'e');
let filteredTask21 = words.filter(word => word.toLowerCase().endsWith('e'));
console.log(filteredTask21);

// 2.2. Turi daugiau raidžių nei 8
let filteredTask22 = words.filter(word => word.length > 8);
console.log(filteredTask22);

// 2.3. Turi neporinį raidžių skaičių
let filteredTask23 = words.filter(word => word.length % 2 !== 0);
console.log(filteredTask23);

// 2.4. Savyje turi raidžių junginį as
let filteredTask24 = words.filter(word => word.toLowerCase().includes('as'));
console.log(filteredTask24);

// REDUCE:
// 1. Sukurti masyvą su bent 7 pasaulio valstybėmis.
let countries = ['Latvija', 'Estija', 'Vokietija', 'Anglija', 'Italija', 'Kinija']
// 2. Sukurti naują kintamąjį, kurio jo reikšmė bus visos pasaulio valstybės iš pirmojo masyvo sudėtos į vieną string'ą (naudoti reduce metodą).
let countriesStr = countries.reduce((prev, current, index, array) => {
  if (array.length - 1 === index) {
    return prev + ', ' + current + '.';
  }

  if (index === 1) {
    return 'Miestai: ' + prev + ', ' + current;
  }

  return prev + ', ' + current;
});

// 3. Šio kintamojo reikšmę išvesti į konsolę.
console.log(countriesStr);
let h1 = document.createElement('h1');
document.createElement('h1').textContent = countriesStr;
document.body.prepend(countriesStr);



// // UŽDUOTIS (papildoma):
// // 1. Sukurti 10-ies skaičių masyvą.
// let nums = [4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787, -20, 35].sort((a, b) => a - b);

// // 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// // 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"

// function task2(arr) {
//   // let arrSum = arr.reduce((sum, currentNumber) => {
//   //   return sum + currentNumber;
//   // });

//   let arrSum = arr.reduce((sum, currentNumber) => sum + currentNumber);
//   let average = arrSum / arr.length;
//   // let numsToString = arr.reduce((text, currentWord) => text + ', ' + currentWord);

//   // let numsToString = arr.join(', ');
//   // let output = `Skaičių (${numsToString}) vidurkis yra ${average}.`;
//   // return output;
//   return getOutput(arr, 'vidurkis', average);
// }
// console.log(task2(nums));

// // 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// // 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"
// function task3(arr) {
//   const numbersInArr = arr.length;
//   let median;

//   if (numbersInArr % 2 === 0) {
//     const middleTopIndex = numbersInArr / 2;
//     const middleBottomIndex = middleTopIndex - 1;

//     const middleTopValue = arr[middleTopIndex];
//     const middleBottomValue = arr[middleBottomIndex];

//     median = (middleTopValue + middleBottomValue) / 2;
//   } else {
//     const middleIndex = Math.floor(numbersInArr / 2);
//     median = arr[middleIndex];
//   }

//   // let numsToString = arr.join(', ');
//   // let output = `Skaičių (${numsToString}) mediana yra ${median}.`;
//   // return output;

//   return getOutput(arr, 'mediana', median);
// }
// console.log(task3(nums));

// // 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// // 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"
// function task4(arr) {
//   let max = Math.max(...arr);

//   // let numsToString = arr.join(', ');
//   // let output = `Skaičių (${numsToString}) didžiausias skaičius yra ${max}.`;
//   // return output;
//   return getOutput(arr, 'didžiausias skaičius', max)
// }
// console.log(task4(nums));

// // 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// // 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"
// function task5(arr) {
//   let min = Math.min(...arr);

//   // let numsToString = arr.join(', ');
//   // let output = `Skaičių (${numsToString}) mažiausias skaičius yra ${min}.`;
//   // return output;

//   return getOutput(arr, 'mažiausias skaičius', min);
// }
// console.log(task5(nums));

// // 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// // 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"
// function task6(arr, nth) {
//   let index = nth - 1;
//   let nthNumber = arr[index];

//   let text = nth + 'skaičius pagal dydį';
//   let output = getOutput(arr, text, nthNumber);
//   return output;
// }
// console.log(task6(nums, 15));

// function getOutput(numsArray, text, answer) {
//   let numsToString = numsArray.join(', ');
//   return `Skaičių (${numsToString}) ${text} yra ${answer}.`;
// }






// UŽDUOTIS (sutrumpinta):
let nums = [4, 65, -8, 8, -91, 1, 3, 0, '15', -6165, 'labas', 516, undefined, null, true, 11, 78, -787, -20, 35].sort((a, b) => a - b);

function task2(arr) {
  let arrSum = arr.reduce((sum, currentNumber) => sum + currentNumber);
  let average = arrSum / arr.length;
  return getOutput(arr, 'vidurkis', average);
}
console.log(task2(nums));

function task3(arr) {
  const numbersInArr = arr.length;
  let median;

  if (numbersInArr % 2 === 0) {
    const middleTopIndex = numbersInArr / 2;
    const middleBottomIndex = middleTopIndex - 1;

    const middleTopValue = arr[middleTopIndex];
    const middleBottomValue = arr[middleBottomIndex];

    median = (middleTopValue + middleBottomValue) / 2;
  } else {
    const middleIndex = Math.floor(numbersInArr / 2);
    median = arr[middleIndex];
  }

  return getOutput(arr, 'mediana', median);
}
console.log(task3(nums));

function task4(arr) {
  let max = Math.max(...arr);
  return getOutput(arr, 'didžiausias skaičius', max)
}
console.log(task4(nums));

function task5(arr) {
  let min = Math.min(...arr);
  return getOutput(arr, 'mažiausias skaičius', min);
}
console.log(task5(nums));

function task6(arr, nth) {
  let index = nth - 1;
  let nthNumber = arr[index];

  let text = nth + 'skaičius pagal dydį';
  let output = getOutput(arr, text, nthNumber);
  return output;
}
console.log(task6(nums, 15));

function getOutput(numsArray, text, answer) {
  let numsToString = numsArray.join(', ');
  return `Skaičių (${numsToString}) ${text} yra ${answer}.`;
}