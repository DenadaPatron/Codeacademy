// Masyvas / array
let plants = [
  "banana",
  "orange",
  "apple",
  "tomato",
  456,
  true,
  ["Vienas", "Du", "Trys"],
  879987,
];
// Indeksas      0         1         2        3       4     5              6

console.log(plants);
// Masyve esančių duomenų pasiekimas
console.log(plants[0]);
console.log(plants[1]);
console.log(plants[2]);
console.log(plants[3]);
console.log(plants[4]);
console.log(plants[5]);
console.log(plants[6]);

for (let i = 0; i < plants.length; i++) {
  console.log(i);
  console.log(plants[i]);
}

console.log(plants[6][0]);
console.log(plants[6][1]);
console.log(plants[6][2]);

console.log(plants.length);
console.log(plants[6].length);

for (let i = 0; i < plants[6].length; i++) {
  console.log(i);
  console.log(plants[6][i]);
}

// Užduotis (masyvai):
// 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.
console.log("----------TASKS--------------");

let carArray1 = [
  "bmw",
  "audi",
  "mb",
  "porsche",
  "nissan",
  "opel",
  "ferrari",
  "ford",
  "honda",
  "vw",
];
let numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nameArray1 = [
  "Ernestas",
  "Pranas",
  "Antanas",
  "Marius",
  "Tomas",
  "Petras",
  "Jonas",
  "Genadijus",
  "Romanas",
  "Saulius",
];

function singleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

singleArray(carArray1);
singleArray(numberArray1);
singleArray(nameArray1);

let carArray2 = [
  [
    "bmw", // 0 0
    "audi", // 0 1
    "mb", // 0 2
  ], // 0
  ["porsche", "nissan", "opel"], // 1
  ["ferrari", "ford", "honda", "vw"], // 2
];

function nestedArrays(arr) {
  console.log(arr);

  // console.log(arr[0]);
  // console.log(arr[0][0]);
  // console.log(arr[0][1]);
  // console.log(arr[0][2]);

  // console.log(arr[1]);
  // console.log(arr[1][0]);
  // console.log(arr[1][1]);
  // console.log(arr[1][2]);

  // console.log(arr[2]);
  // console.log(arr[2][0]);
  // console.log(arr[2][1]);
  // console.log(arr[2][2]);
  // console.log(arr[2][3]);

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     console.log(arr[i][j]);
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    let innerArray = arr[i];
    for (let j = 0; j < innerArray.length; j++) {
      console.log(innerArray[j]);
    }
  }
}

nestedArrays(carArray2);

let numberArray3 = [
  [
    [1, 2],
    [3, 4, 5],
  ],
  [
    [6, 7, 8],
    [9, 10],
  ],
];

function nestedArrays2(arr) {
  console.log(arr);
  // console.log(arr[0]);
  // console.log(arr[0][0]);
  // console.log(arr[0][0][0]);
  // console.log(arr[0][0][1]);

  // console.log(arr[0][1]);
  // console.log(arr[0][1][0]);
  // console.log(arr[0][1][1]);
  // console.log(arr[0][1][2]);

  // console.log(arr[1]);
  // console.log(arr[1][0]);
  // console.log(arr[1][0][0]);
  // console.log(arr[1][0][1]);
  // console.log(arr[1][0][2]);

  // console.log(arr[1][1]);
  // console.log(arr[1][1][0]);
  // console.log(arr[1][1][1]);

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     for (let k = 0; k < arr[i][j].length; k++) {
  //       console.log(arr[i][j][k]);
  //     }
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    let secondArr = arr[i];
    for (let j = 0; j < secondArr.length; j++) {
      let thirdArr = secondArr[j];
      for (let k = 0; k < thirdArr.length; k++) {
        console.log(thirdArr[k]);
      }
    }
  }
}

nestedArrays2(numberArray3);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
console.log(nums[4]);

nums[4] = 15;
console.log(nums);
console.log(nums[4]);

nums[10] = 100;
console.log(nums);

console.log(nums.length);
nums[nums.length] = 200;
console.log(nums);

let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"];
console.log(cities);

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą

// Pašalina paskutinį masyvo narį - pop() metodas
let removedCity = cities.pop();
console.log("Removed City: ", removedCity);
console.log("Original cities: ", cities);

// Pašalina pirmą masyvo narį - shift() metodas
let removedCityWithShift = cities.shift();
console.log("Removed City:", removedCityWithShift);
console.log("Original cities:", cities);

// Prideda naują masyvo narį į masyvo pabaigą - push() metodas
let arrayLength = cities.push("Jonava");
cities.push("Tauragė");
cities.push("Biržai", "Palanga");

console.log("New array length:", arrayLength);
console.log("New cities array:", cities);

// Prideda naują masyvo narį į masyvo pradžią - unshift() metodas
cities.unshift("Vilnius");
cities.unshift("Nida", "Kretinga");
console.log(cities);

let countries = ["Lithuania", "Latvia", "Poland", "France", "Germany", "Italy"];
// Indeksas          0            1         2         3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1

// SLICE - nemutuoja originalaus masyvo (nekeičia originalaus masyvo reikšmės)
console.log("-----------SLICE-------------");
console.log(countries);

let slicedCountries1 = countries.slice(2);
console.log(slicedCountries1);

let slicedCountries2 = countries.slice(2, 4);
console.log(slicedCountries2);

let slicedCountries3 = countries.slice(0, 3);
console.log(slicedCountries3);

let slicedCountries4 = countries.slice(-4);
console.log(slicedCountries4);

let slicedCountries5 = countries.slice(-4, -2);
console.log(slicedCountries5);

let slicedCountries6 = countries.slice(-2, -4);
console.log(slicedCountries6);

let slicedCountries7 = countries.slice(4, 2);
console.log(slicedCountries7);

let slicedCountries8 = countries.slice(2, -2);
console.log(slicedCountries8);

let slicedCountries9 = countries.slice(-4, 4);
console.log(slicedCountries9);

let slicedCountries10 = countries.slice(0, 1);
console.log(slicedCountries10);

let slicedCountries11 = countries.slice(0);
console.log(slicedCountries11);

// SPLICE - modifikuoja originalų masyvą (keičia originalaus masyvo reikšmę)
console.log("-----------SPLICE-------------");
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// let splicedNumbers = numbers.splice(2);
// let splicedNumbers = numbers.splice(0, 1);
// let splicedNumbers = numbers.splice(2, 3);
// let splicedNumbers = numbers.splice(1, 1);
// let splicedNumbers = numbers.splice(5, 1);
// let splicedNumbers = numbers.splice(-4, 1);
// let splicedNumbers = numbers.splice(-4, 2);
// let splicedNumbers = numbers.splice(-1);
// let splicedNumbers = numbers.splice(-4, -1);
// let splicedNumbers = numbers.splice(2, -1);
// let splicedNumbers = numbers.splice(2, 0);
// let splicedNumbers = numbers.splice(2, 1, 10);
// let splicedNumbers = numbers.splice(2, 1, 10, 15, 20);
// let splicedNumbers = numbers.splice(3, 0, 'Trys su puse');
// let splicedNumbers = numbers.splice(3, 0, 'Trys su puse', 3.70);
// let splicedNumbers = numbers.splice(0, 0, -1);
let splicedNumbers = numbers.splice(-1, 0, 10);

console.log(splicedNumbers);
console.log(numbers);

// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.

let shoppingList = [
  "pienas",
  "duona",
  "sviestas",
  "bulvės",
  "obuoliai",
  "bananai",
  "šokoladukas",
  "kava",
];

console.log(shoppingList);

// 1. Išimti pirmus du pirkinius.
let task1 = shoppingList.slice(0, 2);
console.log(task1);

// 2. Išimti tris paskutinius pirkinius.
// let task2 = shoppingList.slice(shoppingList.length - 3);
let task2 = shoppingList.slice(-3);
console.log(task2);

// 3. Išimti ketvirtą ir penktą pirkinį.
let task3 = shoppingList.slice(3, 5);
console.log(task3);

// 4. Išimti antrą ir trečią pirkinį.
let task4 = shoppingList.slice(1, 3);
console.log(task4);

// 5. Išimti visus, išskyrus pirmą pirkinį.
let task5 = shoppingList.slice(1);
console.log(task5);

// Sukurti 10-ties filmų masyvą ir iš jo:
// (nemodifikuoti originalaus masyvo)

let movies = [
  "The Godfather",
  "Pulp Fiction",
  "Goodfellas",
  "Inception",
  "City of God",
  "Star Wars",
  "Spirited Away",
  "The Pianist",
  "The Great Dictator",
  "Princess Mononoke",
];
console.log(movies);

// 1. Išimti pirmus 5 filmus.
let task21 = movies.slice(0, 5);
console.log(task21);

// 2. Išimti 4 paskutinius filmus.
let task22 = movies.slice(-4);
console.log(task22);

// 3. Išimti nuo trečio iki septinto filmo.
let task23 = movies.slice(2, 7);
console.log(task23);

// 4. Išimti antrą ir trečią filmą.
let task24 = movies.slice(1, 3);
console.log(task24);

// 5. Išimti visus, išskyrus pirmą filmą.
let task25 = movies.slice(1);
console.log(task25);

// 6. Išimti 5 filmus skaičiuojant nuo trečio.
let task26 = movies.slice(3, 8);
console.log(task26);

// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
let task27 = movies.slice(-4, -1);
console.log(task27);

// let task271 = movies.splice(-4, 3);
// console.log(task271);
console.log(movies);

// (galima modifikuoti originalų masyvą)
// 8. Vietoje penkto filmo įrašyti du naujus filmus.
let task28 = movies.splice(4, 1, "Naujas filmas", "Naujas filmas 2");
console.log(task28);

// 9. Pašalinti pirmą filmą.
// let task29 = movies.shift();
let task29 = movies.splice(0, 1);
console.log(task29);

// 10. Įrašyti naują filmą į masyvo pradžią.
// let task30 = movies.unshift('Dar vienas naujas filmas');
let task30 = movies.splice(0, 0, "Dar vienas naujas filmas");
console.log(task30);

console.log(movies);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
let task111 = movies.splice(1, 3);
console.log(task111);
// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
let task112 = movies.splice(-4, 3);
console.log(task112);

// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

// FLAT metodas
let task1131 = [task111, task112].flat().reverse();
console.log(task1131);

// CONCAT metodas
let task1132 = task111.concat(task112).reverse();
console.log(task1132);

// SPREAD operator
let task1133 = [...task111, ...task112].reverse();
console.log(task1133);

// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.

function renderList(arr, selector) {
  // console.log(arr);
  // console.log(arr[0]);
  // console.log(arr[1]);
  // console.log(arr[2]);
  // console.log(arr[3]);
  // console.log(arr[4]);
  // console.log(arr[5]);

  let ulElement = document.querySelector(selector);

  // ulElement.innerHTML += `<li>${arr[0]}</li>`;
  // ulElement.innerHTML += `<li>${arr[1]}</li>`;
  // ulElement.innerHTML += `<li>${arr[2]}</li>`;
  // ulElement.innerHTML += `<li>${arr[3]}</li>`;
  // ulElement.innerHTML += `<li>${arr[4]}</li>`;
  // ulElement.innerHTML += `<li>${arr[5]}</li>`;

  // for (let i = 0; i < arr.length; i++) {
  //   ulElement.innerHTML += `<li>${i + 1}. ${arr[i]}</li>`;
  // }

  for (let i = 0; i < arr.length; i++) {
    let number = i + 1;
    let text = arr[i];

    ulElement.innerHTML += `<li>${number}. ${text}</li>`;
  }
}

// renderList(task1133, ".first-list");
// renderList(shoppingList, ".second-list");
// renderList(cities, ".third-list");

console.log("---------------MAP-----------------");
let citiesArr = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Marijampolė",
  "Alytus",
];
console.log(citiesArr);

for (let i = 0; i < citiesArr.length; i++) {
  console.log(i);
  console.log("For ciklas: " + citiesArr[i]);
}

// citiesArr.map(function(city, index, array) {
//   console.log(index);
//   console.log('Map ciklas: ' + city);
//   console.log(array);
// });

// citiesArr.map((city, index, array) => {
//   console.log(index);
//   console.log('Map ciklas: ' + city);
//   console.log(array);
// });

citiesArr.map((city) => console.log("Map ciklas: " + city));

// citiesArr.forEach(function(city, index, array) {
//   console.log(index);
//   console.log('ForEach ciklas: ' + city);
//   console.log(array);
// });

// citiesArr.forEach((city, index, array) => {
//   console.log(index);
//   console.log('ForEach ciklas: ' + city);
//   console.log(array);
// });

citiesArr.forEach((city) => console.log("ForEach ciklas: " + city));

const myAwesomeArray = [1, 2, 3, 4, 5, 7, 10];

// let mapArray = myAwesomeArray.map(num => num * num);
// let forEachArray = myAwesomeArray.forEach(num => num * num);

let mapArray = myAwesomeArray.map((num) => {
  return num * num;
});
console.log(mapArray);

let forEachArray = myAwesomeArray.forEach((num) => {
  return num * num;
});
console.log(forEachArray);

const chainArray = [1, 5, 10, 15, 22, 555];
console.log(chainArray);
console.log(chainArray.reverse());
console.log(chainArray.reverse().reverse());
console.log(chainArray.reverse().reverse().splice(1, 2));
console.log(chainArray.reverse().reverse().splice(1, 2).reverse());

let carArray3 = [
  "bmw",
  "audi",
  "mb",
  "porsche",
  "nissan",
  "opel",
  "ferrari",
  "ford",
  "honda",
  "vw",
];
let numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nameArray2 = [
  "Ernestas",
  "Pranas",
  "Antanas",
  "Marius",
  "Tomas",
  "Petras",
  "Jonas",
  "Genadijus",
  "Romanas",
  "Saulius",
];

// function mapLoop(arr) {
//   arr.map((item) => {
//     console.log(item);
//   });
// }

function mapLoop(arr) {
  arr.map((item) => console.log(item));
}

mapLoop(carArray3);
mapLoop(numberArray2);
mapLoop(nameArray2);

let carArray4 = [
  ["bmw", "audi", "mb"],
  ["porsche", "nissan", "opel"],
  ["ferrari", "ford", "honda", "vw"],
];

function nestedMapLoop(arr) {
  arr.map((firstLevelArr) => {
    firstLevelArr.map((item) => {
      console.log(item);
    });
  });
}

nestedMapLoop(carArray4);

let carArray5 = [
  [
    ["bmw", "audi", "mb"],
    ["porsche", "nissan", "opel"],
  ],
  [
    ["ferrari", "ford"],
    ["honda", "vw"],
  ],
];


function nestedMapLoop2(arr) {
  arr.map((firstLevelArr) => {
    firstLevelArr.map((secondLevelArr) => {
      secondLevelArr.map((item) => {
        console.log(item);
      });
    });
  });
}

nestedMapLoop2(carArray5);

function renderListMap(arr, selector) {
  let ulElement = document.querySelector(selector);

  arr.map((item, index) => {
    let number = index + 1;
    ulElement.innerHTML += `<li>${number}. ${item}</li>`;
  });
}

renderListMap(task1133, ".first-list");
renderListMap(shoppingList, ".second-list");
renderListMap(cities, ".third-list");


// FILTER
let numsArray = [5, 2, 3, 4, 5, 6, 7, 10];
console.log(numsArray);

// let filteredArrayNums = numsArray.filter((num) => {
//   return num > 4 && num < 9 && num % 2 === 0;
// });

let filteredArrayNums = numsArray.filter(num => num > 4 && num < 9 && num % 2 === 0);

console.log(filteredArrayNums);

let filteredCarsArray = carArray3.filter((car) => {
  console.log(car);
  console.log(car.length);
  console.log(car.length > 5);
  return car.length > 5;
});

console.log(filteredCarsArray);

console.log(numsArray);

let arraySum = numsArray.reduce((sum, currentValue, currentIndex) => {
  console.log('Index: ' + currentIndex);
  console.log('CurrentValue: ' + currentValue);
  console.log('Sum: ' + sum);

  return currentValue + sum;
}, 100);

console.log(arraySum);