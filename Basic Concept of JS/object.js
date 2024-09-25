const object1={
    name:"John",
    age:30,
    occupation:"Engineer"
}
let name = object1.name;
console.log(name);


let a=2;
let b='2';
let c=2;

(a==b)?a=5:b=10;
console.log(a,b,c);



let isGood = confirm("Do you want to continue");  // ok --> true cancle--> false
console.log(isGood);


const obj = {
    id: 100,
    firstName: "Karunya",
    lastName: "Gupta",
    name: function() {
      return (this.firstName + " " + this.lastName).toUpperCase();
    }
  };
  
  console.log(obj.id); 
  console.log(obj.name()); 
  
  let fullName = obj.name(); 
  console.log(fullName);