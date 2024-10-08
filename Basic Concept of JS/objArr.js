let data={
    name:"Karunya Gupta",
    age:20,
    occupation:"Student",
    exs:{
        name:"Ankush",
        age:21,
        location:"Jharkhand"
    },
    londa:{
        kaam:"ullu katwana",
        sal:[15000,40000,NaN,10000]
    },
    marsata:false,
    arr:[1,2,3,4,5,2],

    testfun:function(){
        confirm("hhahah");

    }
}

console.log(data.name);
console.log(data.exs.name);
console.log(data.londa.sal[2]);
console.log(data.arr[3]);
data.testfun();