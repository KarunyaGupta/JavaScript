let number = parseInt(prompt("Enter number : "));

function printPrimes(number) {
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
}  

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
}

printPrimes(number);