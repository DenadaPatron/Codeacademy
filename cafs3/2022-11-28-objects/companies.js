// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// const companyABC = {};
const company1 = new Object();
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC';
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2000;
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 45646876545;
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 45;
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe';
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = true;
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Poland'];
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['Marketing', 'B2B Sales'];
// 2.9. Property „contacts", kuris turės:
company1.contacts = {};
//       2.9.1. „phone"
company1.contacts.phone = 8643543544;
//       2.9.2. „email"
company1.contacts.email = 'info@companyabc.lt';
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"
// company1.contacts.address = {
//   country: 'Lithuania',
//   city: 'Vilnius',
//   street: 'Vilniaus st.',
//   apartment: 15,
// };
company1.contacts.address = {};
company1.contacts.address.country = 'Lithuania';
company1.contacts.address.city = 'Vilnius';
company1.contacts.address.street = 'Vilniaus st.';
company1.contacts.address.apartment = 20;

// 2.10. Property „subsidiaries", kurio reikšmė bus masyvas.
company1.subsidiaries = [];

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getAddress = function() {
  // let contactOutput = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
  
  // let city = this.contacts.address.city;
  // let street = this.contacts.address.street;
  // let country = this.contacts.address.country;
  // let apartment = this.contacts.address.apartment;

  let { city, street, country, apartment } = this.contacts.address;

  let contactOutput = `${street} ${apartment}, ${city}, ${country}.`;

  return contactOutput;
}

console.log(company1.getAddress());

// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.

company1.setNonNVO = function() {
  this.nvo = false;
}

company1.setNVO = function() {
  this.nvo = true;
}

company1.switchNVO = function() {
  this.nvo = !this.nvo;
}

console.log(company1.nvo);
company1.setNonNVO();
console.log(company1.nvo);
company1.setNVO();
console.log(company1.nvo);
company1.switchNVO();
company1.switchNVO();
console.log(company1.nvo);

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.

company1.getWorkingLocations = function() {
  return this.workingLocations.join(', ');
}

company1.getActivityAreas = function() {
  return this.activityAreas.join(', ');
}

console.log(company1.getWorkingLocations());
console.log(company1.getActivityAreas());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.

company1.addWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation);
}

company1.addActivityArea = function(newArea) {
  this.activityAreas.push(newArea);
}

company1.addWorkingLocation('Spain');
company1.addWorkingLocation('Italy');

company1.addActivityArea('B2C Sales');

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.

company1.removeWorkingLocation = function(locationToRemove) {
  let updatedWorkingLocations = this.workingLocations.filter((location) => {
    return location !== locationToRemove;
  });

  this.workingLocations = updatedWorkingLocations;
}

company1.removeWorkingLocation('Spain');

company1.removeActivityArea = function(areaToRemove) {
  this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove)
}

company1.removeActivityArea('B2B Sales');

console.log(company1);


const company2 = {
  'company name': 'Company XYZ',
  opened: 1999,
  companyCode: 564646546,
  employees: 10,
  ceo: 'Doe John',
  nvo: true,
  workingLocations: ['Lithuania', 'Germany'],
  activityAreas: ['Traveling', 'Marketing'],
  contacts: {
    phone: 86464456546,
    email: 'info@companyXYZ.lt',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 15,
    }
  },
  subsidiaries: [company1],
  getAddress: function() {
    let { city, street, country, apartment } = this.contacts.address;
    let contactOutput = `${street} ${apartment}, ${city}, ${country}.`;
    return contactOutput;
  },
  setNonNVO: function() {
    this.nvo = false;
  },
  setNVO: function() {
    this.nvo = true;
  },
  switchNVO: function() {
    this.nvo = !this.nvo;
  },
  getWorkingLocations: function() {
    return this.workingLocations.join(', ');
  },
  getActivityAreas() {
    return this.activityAreas.join(', ');
  },
  addWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation);
  },
  addActivityArea(newArea) {
    this.activityAreas.push(newArea);
  },
  removeWorkingLocation(locationToRemove) {
    this.workingLocations = this.workingLocations.filter(location => location !== locationToRemove);
  },
  removeActivityArea(areaToRemove) {
    let updatedActivityAreas = this.activityAreas.filter(area => area !== areaToRemove);
    this.activityAreas = updatedActivityAreas;
  }
}

console.log(company2);
console.log(company2.getAddress());
