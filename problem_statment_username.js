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