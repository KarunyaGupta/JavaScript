//concatinate array 
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let arr3=arr1.concat(arr2);
console.log(arr3);

// concatinate array without functionb

let arr4=[];
let k=0;
let sum =0;
for(let i=0;i<arr1.length;i++){
    arr4[k]=arr1[i];
    k++;
    sum += arr1[i];
}
for(let i=0;i<arr2.length;i++){
    arr4[k]=arr2[i];
    k++;
}
console.log(arr4);
console.log(sum);



