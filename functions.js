function sum(a, b) {
    return a + b;
}

console.log(sum(4, 5)); // logs 9
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(arr[0], arr[1])); // logs 5





function abc(a,b,...rest){
    console.log(a,b);
    console.log(rest);
}

abc(1,2,3,4,5,6,7,8,9);


let arr1=[1,2,3];
let arr2=[4,5,6];
let mergeAll=[...arr1,...arr2];
console.log(mergeAll); // merge 

// concatinate
com