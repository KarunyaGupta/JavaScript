let number = parseInt(prompt("Enter a number : "));

function even_number(number){
    for(let i=0;i<=number;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

even_number(number);