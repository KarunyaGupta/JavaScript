let arr=[];
let len=parseInt(prompt("Enter length of arr : "));
for(let i=0;i<len;i++){
    arr[i]=parseInt(prompt("Enter element : "));
}
console.log(arr);


// just for fun 
for(let i=0;i<len;i++){
    if(arr[i]%2==0){
        console.log(`${arr[i]} at index ${i}`);
    }
}

// n-i+1;

for(let i=0;i<len;i++){
    for(let j=0;j<len-i+1;j++){
        console.log(arr[j]);
    }
    
}