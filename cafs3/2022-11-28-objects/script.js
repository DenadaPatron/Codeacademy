// Masyvo sukūrimas 
let studentai = ['Jonas', 'Petras', 'Ona'];

// Masyvo narių pasiekimas
console.log(studentai);
console.log(studentai[0]);
console.log(studentai[1]);
console.log(studentai[2]);

// Kaip iteruojama per masyvą (ciklas/loop)

// for ciklas
for (let i = 0; i < studentai.length; i++) {
  console.log('For ciklas: ' + studentai[i]);
}

// map ciklas
studentai.map((studentas) => {
  console.log('Map ciklas ' + studentas);
})

// forEach ciklas
studentai.forEach((studentas) => {
  console.log('forEach ciklas: ' + studentas);
})

// while ciklas
let n = 0;
while (n < studentai.length) {
  console.log('while: ' + studentai[n]);
  n++;
}

// do while
let m = 0;
do {
  console.log('do while: ' + studentai[m])
  m++;
} while (m < studentai.length);

// for ...of ciklas
for (let studentas of studentai) {
  console.log('For...of: ' + studentas);
}

//                 Vardas               Pavarde   Amzius  Grupe  Miestas
let studentas1 = ['Jonas', 'Jonauskas', 'Jonaitis', 25, 'CAFS3', 'Vilnius'];

console.log(studentas1[0]);
console.log(studentas1[1]);
console.log(studentas1[2]);
console.log(studentas1[3]);
console.log(studentas1[4]);

/*

Objekto sintaksė:

let object = {
  key: 'value',
}

Studentas 1:
  - Vardas: Jonas,
  - Antras vardas: Jonauskas,
  - Pavardė: Jonaitis,
  - Amžius: 25,
  - Grupė: CAFS3,
  - Miestas: Vilnius

*/

let studentObj = {
  vardas: 'Jonas', // Propertie (key: value)
  'antras vardas': 'Jonauskas',
  pavarde: 'Jonaitis',
  amzius: 25,
  grupe: 'CAFS3',
  miestas: 'Vilnius',
  balai: [5, 6, 8, 10],
  kontaktai: {
    miestas: 'Vilnius',
    gatve: 'Vilniaus st.',
    namoNumeris: 15,
    butoNumeris: 15,
  },
  gautiPilnaVarda: function() {
    return `${this.vardas} ${this['antras vardas']} ${this.pavarde}`;
  },
  padarytiStudentaNeaktyviu() {
    this.aktyvus = false;
  },
  padarytiStudentaAktyviu() {
    this.aktyvus = true;
  },
  perjugtiStudentoAktyvuma() {
    // if (this.aktyvus) {
    //   // this.aktyvus = false;
    //   this.padarytiStudentaNeaktyviu()
    // } else {
    //   // this.aktyvus = true;
    //   this.padarytiStudentaAktyviu();
    // }
    this.aktyvus = !this.aktyvus;
  },
  pridetiHobi(naujasHobis) {
    this.hobiai.push(naujasHobis);
  }
}

console.log(studentObj);

// Objekto properties pasiekimas
console.log(studentObj['vardas']);
console.log(studentObj['antras vardas']);
console.log(studentObj['pavarde']);
console.log(studentObj['amzius']);
console.log(studentObj['grupe']);
console.log(studentObj['miestas']);

// Objekto properties pasiekimas (per tašką)
console.log(studentObj.vardas);
console.log(studentObj['antras vardas']);
console.log(studentObj.pavarde);
console.log(studentObj.amzius);
console.log(studentObj.grupe);
console.log(studentObj.miestas);

// Objekto properties pakeitimas
console.log(studentObj.amzius);
studentObj.amzius = 26;
console.log(studentObj.amzius);

console.log(studentObj['miestas']);
studentObj['miestas'] = 'Kaunas';
console.log(studentObj['miestas']);

// Objekto properties sukūrimas
console.log(studentObj.aktyvus);
studentObj.aktyvus = true;
console.log(studentObj.aktyvus);

// studentObj.gimtasisMiestas = 'Klaipėda';
studentObj['gimtasis miestas'] = 'Klaipėda';
console.log(studentObj['gimtasis miestas']);

// Objekto property pašalinimass
delete studentObj['gimtasis miestas'];
console.log(studentObj['gimtasis miestas']);

// Masyvai objekte
studentObj.hobiai = ['Krepšinis', 'Futbolas', 'Keliavimas'];
console.log(studentObj.hobiai);
console.log(studentObj.hobiai[0]);
console.log(studentObj.hobiai[1]);
console.log(studentObj.hobiai[2]);

studentObj.hobiai.map((hobis) => console.log(hobis));

for (let i = 0; i < studentObj.hobiai.length; i++) {
  console.log(studentObj.hobiai[i]);
}

let studentoHobiai = studentObj.hobiai;
console.log(studentoHobiai);

// Objektai objekte
console.log(studentObj.kontaktai);
console.log(studentObj.kontaktai.miestas);
console.log(studentObj.kontaktai.gatve);
console.log(studentObj.kontaktai.namoNumeris);
console.log(studentObj.kontaktai.butoNumeris);

let studentoKontaktai = studentObj.kontaktai;
console.log(studentoKontaktai);
console.log(studentoKontaktai.miestas);
console.log(studentoKontaktai.gatve);
console.log(studentoKontaktai.namoNumeris);
console.log(studentoKontaktai.butoNumeris);

// Objekt property sukūrimas už objekto ribų
// Pirmas būdas - kuriant naują objektą ir priskiriant jį kintamąjam
// let studentoIssilavinimas = {
//   miestas: 'Vilnius',
//   universitetas: 'VDU',
//   baigimoMetai: 2020,
// }

// studentObj.issilavinimas = studentoIssilavinimas;

// Antras būdas - kuriant naują objetą tiesiogiai sename objekte
// studentObj.issilavinimas = {
//   miestas: 'Vilnius',
//   universitetas: 'VDU',
//   baigimoMetai: 2020,
// }

// Trečias būdas - kuriant kiekvieną property atskirai
// studentObj.issilavinimas = {};
studentObj.issilavinimas = new Object();
studentObj.issilavinimas.miestas = 'Vilnius';
studentObj.issilavinimas.universitetas = 'VDU';
studentObj.issilavinimas.baigimoMetai = 2020;

console.log(studentObj);

console.log(studentObj.gautiPilnaVarda());
studentObj.padarytiStudentaNeaktyviu();
console.log(studentObj.aktyvus);
studentObj.padarytiStudentaAktyviu();
console.log(studentObj.aktyvus);
studentObj.perjugtiStudentoAktyvuma();
console.log(studentObj.aktyvus);
studentObj.perjugtiStudentoAktyvuma();
console.log(studentObj.aktyvus);
studentObj.perjugtiStudentoAktyvuma();
console.log(studentObj.aktyvus);
studentObj.perjugtiStudentoAktyvuma();
console.log(studentObj.aktyvus);

console.log(studentObj.hobiai);
studentObj.pridetiHobi('Skaitymas');
console.log(studentObj.hobiai);

studentObj.pasalintiHobi = function(hobis) {
  // let atnaujintiHobiai = this.hobiai.filter((senasHobis) => {
  //   return senasHobis !== hobis;
  // });

  this.hobiai = this.hobiai.filter(senasHobis => senasHobis !== hobis);
};

studentObj.pasalintiHobi('Keliavimas');
console.log(studentObj.hobiai);