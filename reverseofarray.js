// take a input from a user and reverse of array 
let arr=[];
let len=parseInt(prompt("Enter length of arr : "));
for(let i=0;i<len;i++){
    arr[i]=parseInt(prompt("Enter element : "));
}
console.log(arr);
let rev=[];
for(let i=len-1;i>=0;i--){
    rev.push(arr[i]);
}
console.log(rev);
