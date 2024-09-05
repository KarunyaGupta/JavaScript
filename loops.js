let arr=[2,3,4,"potato","aabra"];
let str="group8";
console.log(arr[3][4]);  // fetch alphabet


for(let val of arr){   // assign value to val 
    console.log(val);
    val="6"; 
    console.log(val);  // val is reassigned to 6
}
console.log(arr);   // no cange in arr


for(let value of str){
    console.log(value);   // print the alphabet of string
}

const object1={  // creating object
    name:"John",
    age:30,
    city:"New York"
}

for(let key in object1){
    console.log(key);  // print the keys of object
    console.log(object1[key]);
}
object1.age=35;   // we can change the value of key in object
console.log(object1);

