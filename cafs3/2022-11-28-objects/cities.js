// CITIES:
// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

const citiesData = [
  {
    name: "Vilnius",
    population: 620222,
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: [
      "Gediminas Castle Tower",
      "Vilnius Cathedral",
      "St. Anne's Church",
      "Gates of Dawn",
    ],
    isCapital: true,
  },
  {
    name: "New York",
    population: 8804190,
    location: {
      continent: "North America",
      country: "USA",
    },
    touristAttractions: [
      "Statue of Liberty",
      "Empire State Building",
      "Times Square",
      "Central Park",
    ],
    isCapital: false,
  },
  {
    name: "Tokyo",
    population: 13988129,
    location: {
      continent: "Asia",
      country: "Japan",
    },
    touristAttractions: ["Sensō-ji", "Tokyo Skytree"],
    isCapital: true,
  },
  {
    name: "Cairo",
    population: 20484965,
    location: {
      continent: "Africa",
      country: "Egypt",
    },
    touristAttractions: [
      "Giza Necropolis",
      "The Egyptian Museum",
      "The Coptic Museum",
    ],
    isCapital: true,
  },
  {
    name: "Brisbane",
    population: 2560700,
    location: {
      continent: "Australia",
      country: "Australia",
    },
    touristAttractions: [],
    isCapital: false,
  },
  {
    name: "Cochabamba",
    population: 1370104,
    location: {
      continent: "South America",
      country: "Bolivia",
    },
    touristAttractions: ["El Cristo de la Concordia"],
    isCapital: false,
  },
  {
    name: "Lisbon",
    population: 2871133,
    location: {
      continent: "Europe",
      country: "Portugal",
    },
    touristAttractions: [
      "Belém Tower",
      "Castelo de S. Jorge",
      "Jerónimos Monastery",
      "Oceanário de Lisboa",
      "LxFactory",
    ],
    isCapital: true,
  },
];

// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
// 1.6.4. Visų miestų šalį išvesti į konsolę.
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.

let citiesWrapper = document.querySelector('#cities-wrapper');

function renderCities(cities) {

  cities.map((city) => {
    // let name = city.name;
    // let population = city.population;
    // let touristAttractions = city.touristAttractions;
    let { name, population, touristAttractions, isCapital } = city;

    // let continent = city.location.continent;
    // let country = city.location.country;
    let { continent, country } = city.location;

    // let capitalText = isCapital ? ' (capital)' : '';

    let capitalText = '';
    let capitalDescriptionText = '';
    let capitalClass = '';

    if (isCapital) {
      capitalText = ' <span>(capital)</span>';
      capitalDescriptionText = ` ${name} is the capital of ${country}.`;
      capitalClass = ' capital';
    }

    // let cityTitle = '';
    // if (name) {
    //   cityTitle = `<h2>${name}</h2>`;
    // }

    let cityTitle = name ? `<h2>${name}${capitalText}</h2>` : '';

    let cityDescription = `<p>${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescriptionText}</p>`;
    
    let cityTouristAttractionsWrapper = '';

    if (touristAttractions.length > 0) {
      // PIRMAS BŪDAS
      // let cityTouristAttractionsTitle = `<h3>Main tourist attractions of ${name} are:</h3>`;
      
      // if (touristAttractions.length === 1) {
      //   cityTouristAttractionsTitle = `<h3>Main tourist attraction of ${name} is:</h3>`;
      // }

      // ANTRAS BŪDAS
      // let cityTouristAttractionsTitle = '';
      
      // if (touristAttractions.length === 1) {
      //   cityTouristAttractionsTitle = `<h3>Main tourist attraction of ${name} is:</h3>`;
      // } else {
      //   cityTouristAttractionsTitle = `<h3>Main tourist attractions of ${name} are:</h3>`;
      // }

      // TREČIAS BŪDAS
      let cityTouristAttractionsTitle = touristAttractions.length === 1 ? `<h3>Main tourist attraction of ${name} is:</h3>` : `<h3>Main tourist attractions of ${name} are:</h3>`;
      
      let cityTouristAttractionsItems = '';
  
      touristAttractions.map((touristAttraction) => {
        cityTouristAttractionsItems += '<li>' + touristAttraction + '</li>';
      });
  
      cityTouristAttractionsWrapper = `${cityTouristAttractionsTitle}
                                       <ul>${cityTouristAttractionsItems}</ul>`;
    }


    citiesWrapper.innerHTML += `<div class="city-item${capitalClass}">
                                  ${cityTitle}
                                  ${cityDescription}
                                  ${cityTouristAttractionsWrapper}
                                </div>`;
  })
}

renderCities(citiesData);

// JS selectoriai
// 6.1. Naudojant tik JavaScript, pakeisti visų sostinių teksto spalvą.
let capitalNames = document.querySelectorAll('.city-item.capital h2 span');
capitalNames.forEach(name => name.style.color = 'green');

// 7.1. Pakeisti kas antro miesto fono spalvą.

// let allCities = document.querySelectorAll('.city-item');
// allCities.forEach((city, index) => {
//   if (index % 2 === 0) {
//     city.style.backgroundColor = 'gray';
//   }
// })

// let allCities = document.querySelectorAll('.city-item');
// for (let i = 0; i < allCities.length; i+=2) {
//   allCities[i].style.backgroundColor = 'gray';
// }

let oddCities = document.querySelectorAll('.city-item:nth-of-type(odd)');
oddCities.forEach((city) => {
  city.style.backgroundColor = 'gray';
})


citiesWrapper.style.display = 'flex';
citiesWrapper.style.flexWrap = 'wrap';
citiesWrapper.style.justifyContent = 'space-between';
citiesWrapper.style.rowGap = '30px';

// 7. Naudojant tik JavaScript:
//  7.1. Pakeisti kas antro miesto fono spalvą.
// 8. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.
let allCities = document.querySelectorAll('.city-item');
allCities.forEach((city, index) => {
  if (index % 2 === 0 && index === allCities.length - 1) {
    city.style.width = '100%';
  } else {
    city.style.width = 'calc((100% - 30px) / 2)';
  }
});

//  7.2. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
let firstAttractions = document.querySelectorAll('li:first-child');
firstAttractions.forEach((place) => {
  place.style.color = 'green';
})

//  7.3. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
let lastAttractions = document.querySelectorAll('li:nth-of-type(1n+4)');
lastAttractions.forEach((place) => {
  place.style.color = 'red';
})

let allAttractionLists = document.querySelectorAll('ul');
allAttractionLists.forEach((list) => {
  let places = list.querySelectorAll('li');
  places.forEach((place, index) => {
    if (index === 0) {
      place.style.color = 'green';
    } else if (index > 2) {
      place.style.color = 'red';
    } else {
      place.style.color = 'blue';
    }
  });
})