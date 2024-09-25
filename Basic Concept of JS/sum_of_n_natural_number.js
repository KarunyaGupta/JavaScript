let number = parseInt(prompt("Enter number : "));

function natural_number(number){
  let sum=0;
    if(number>0){
        for(let i =1;i<=number;i++){
            sum +=i;
            
        }
        console.log(sum);
    }
}
natural_number(number);