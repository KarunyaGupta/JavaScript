let input = "kARUNYA gupta";
let output = "";

for (let i = 0; i < input.length; i++) {
  if (i === 0 || input[i - 1] === " ") {
    output += input[i].toUpperCase();
  } else {
    output += input[i].toLowerCase();
  }
}

console.log(output);

// console.log(input.split(" "));
// let x = input.split(" ");

// let y = [];

// for(let i=0;i<x.length;i++){
//     y[i] = x[i].toLowerCase();
    
//     y[i][0] = x[i][0].toLocaleUpperCase();
    
// }
// for(let i=0;i<y.length;i++){
//     console.log(y[i]);
// }


let str = "karunya gupta persuing bE cse form chitkara university";
let arr = str.split(" ");
let result = [];

for (let i = 0; i < arr.length; i++) {
  let firstAlphabet = arr[i][0].toUpperCase();
  let lastAlphabet = arr[i].slice(1, arr[i].length).toLowerCase();
  result.push(firstAlphabet + lastAlphabet);
}

console.log(result);

let finalResult = result.join(" ");
console.log(finalResult);