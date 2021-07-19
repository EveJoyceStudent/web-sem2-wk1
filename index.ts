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

const fbOutput: HTMLElement = document.getElementById('fb-output');
function fizzbuzz() {
  fbOutput.innerHTML = '<h2>fizzbuzz</h2>';
  for (let i = 1; i < 101; i++) {
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
