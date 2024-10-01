let lusername = localStorage.getItem('uname');
let lpassword = localStorage.getItem('pass');

lusername = lusername ? lusername = lusername.split(",") : lusername = [];

if (lpassword) {
    lpassword = lpassword.split(",");
} else {
    lpassword = [];
}


function register() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#confirm-password').value;
    if (!username || !password || !cpassword) {
        alert("Bhar de Bhai/Bahen!")
    } else {
        if (password === cpassword) {
            console.log(username);
            lusername.push(username);
            lpassword.push(password);
            savetoLocal();
            alert("User Saved!!!");
        } else {
            alert("Phir se Bhar!!!!");
            document.querySelector('#username').value = "";
            document.querySelector('#password').value = "";
            document.querySelector('#confirm-password').value = "";

        }
    }
}

function login(){
    let counter=0;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    if(!username || !password){
        alert("Your field is empty");
    }else{
        for(let i = 0; i < lusername.length; i++){
            if(username === lusername[i] && password === lpassword[i]){
                counter++;
            }
        }
    }
    if(counter==1){
        alert("Login Successfull");
    }else{
        alert("Login Failed");
    }
}




function savetoLocal() {
    localStorage.setItem('uname', lusername);
    localStorage.setItem('pass', lpassword);
}