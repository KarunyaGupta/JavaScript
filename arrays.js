// objects --> called arrays 

// Arrays are used to store multiple values in a single variable.

let arr =[];
console.log(arr); // empty array
let arr1 = [1,2,3,4 , "Karunya",3.14,'a',true];
console.log(arr1); // array with values

// Access the Elements of an Array
console.log(arr1[0]); // 1
console.log(arr1[1]); // 2 


for(let i=0;i<arr1.length;i++){
    console.log(arr1[i] );
}


console.log(typeof(arr1)); // show object 

console.log(typeof(arr1[0])); // number
console.log(arr1.length); // string