// // Import stylesheets
import './style.css';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// var planet: string = "Earth";
// var year: number = 1010;
// var isLockdown: boolean = true;
// planet="Venus";
// console.log(planet);
// console.log(year);
// var implicit = "type";
// console.log(implicit);

// // but actually don't use var
// // use let and const instead

// // const doesn't change
// const colour = "green";
// // colour = "red"; doesn't like this

// // let works like var
// let year:number = 2021;
// // console.log(year);
// year = 2019;
// // console.log(year);

// // but let lets you make local variables - this is bad:
// function main() {
//   for(var i=0; i<5; i++){
//     console.log("inside loop ",i);
//     // 0 to 4
//   }
//   console.log("inside main ",i);
//   // 5 !!!!
// }
// // console.log("outside main ",i);
// // doesn't work

// main();

const fbButton: HTMLElement = document.getElementById('fb-btn');
fbButton.addEventListener('click', event => {
  fizzbuzz();
});

const clrButton: HTMLElement = document.getElementById('clear-btn');
clrButton.addEventListener('click', event => {
  if (fbOutput.innerHTML == '<h2>no more fizzbuzz</h2>') {
    fbOutput.innerHTML = '';
  } else if (fbOutput.innerHTML != '') {
    fbOutput.innerHTML = '<h2>no more fizzbuzz</h2>';
  }
});

const fbInput: HTMLElement = document.getElementById('fb-input');
const fbOutput: HTMLElement = document.getElementById('fb-output');
function fizzbuzz() {
  if (fbInput.fbmin.value > fbInput.fbmax.value) {
    fbOutput.innerHTML = '<h2>min is greater than max</h2>';
  } else {
    if (fbOutput.innerHTML != '') {
      fbOutput.innerHTML = '<h2>fizzbuzz again</h2>';
    } else {
      fbOutput.innerHTML = '<h2>fizzbuzz</h2>';
    }
    for (let i = fbInput.fbmin.value; i <= fbInput.fbmax.value; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        // console.log('fizzbuzz', i);
        fbOutput.innerHTML += '<div>fizzbuzz ' + i + '</div>';
      } else if (i % 3 == 0) {
        // console.log('fizz', i);
        fbOutput.innerHTML += '<div>fizz ' + i + '</div>';
      } else if (i % 5 == 0) {
        // console.log('buzz', i);
        fbOutput.innerHTML += '<div>buzz ' + i + '</div>';
      } else {
        // console.log('booo', i);
      }
    }
  }
}

// Create a "Car" class.  A car has a rego and speed.  A car can increase it's speed to a maximum of 120km/h.
class Car {
  rego: string;
  speed: number;
  maxSpeed: number = 120;

  constructor(irego: string, ispeed: number) {
    this.rego = irego;
    this.speed = ispeed;
  }

  increaseSpeed(spd: number): void {
    this.speed += spd;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}

// Create a list/array of 3 cars.  Set the initial speed of car1 to 0, car2 to 10 and car3 to 20.
let car1 = new Car('abc123', 0);
let car2 = new Car('xyz123', 10);
let car3 = new Car('fff000', 20);

let cars: Car[] = [car1, car2, car3];

// Create a dropdown to select a car.  When a car is selected display the speed.
const carsDropdownList: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('carsDropdown')
);
for (let i = 0; i < cars.length; i++) {
  carsDropdownList.innerHTML +=
    '<option value="' + cars[i].rego + '">' + cars[i].rego + '</option>';
}
updateSpeed();
carsDropdownList.addEventListener('input', event => {
  updateSpeed();
});

function updateSpeed() {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].rego == carsDropdownList.value) {
      document.getElementById('speed2').innerHTML = String(cars[i].speed);
    }
  }
}

// Create an input and button to change the speed of the selected car.
const speedInput: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('speedIncrease')
);
const speedButton: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('increase-btn')
);

speedButton.addEventListener('click', event => {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].rego == carsDropdownList.value) {
      cars[i].increaseSpeed(Number(speedInput.value));
    }
  }
  updateSpeed();
});
