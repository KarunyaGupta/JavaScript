function CompountInterest(principal,rate,time,n){
    return principal * Math.pow(1 + rate / n, n * time);
}


let principal = 1000;  
let rate = 0.04;  
let time = 5;  
let n = 12;  
let finalAmount = CompoundInterest(principal, rate, time, n);
console.log(`The final amount after ${time} years is: $${finalAmount.toFixed(2)}`);

