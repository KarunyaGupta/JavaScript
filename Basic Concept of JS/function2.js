let n = parseInt(prompt("Enter how many time milk comes in a day : "));



function getMilk(){
    console.log("Getting one milk");
    // console.log("Milk ");
       
}
// for(let i=0;i<n;i++){
//     getMilk();
// }


function milkPurchase(time){
    time = n;
    // console.log("Milk purchased at " + time + " times");
    console.log(`Milk Purchased at ${time} times `)
}

milkPurchase(n);


function getCowMilk(milk , money){
    let moneyFromFather = parseInt(prompt("Enter given money from home : "));
    let cost = money;
    let totalMilk = milk * cost;
    console.log(`Total Milk cost : ${totalMilk} `);
    let leftMoney = moneyFromFather - totalMilk;
    return leftMoney; // left money to save the value of given variable 
}

getCowMilk(10, 38);