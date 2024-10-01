let lusername = localStorage.getItem('uname');
let lpassword = localStorage.getItem('pass');

lusername = lusername ? lusername.split(",") : lusername = [];

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
            let getUsersButton = document.createElement('input');
            getUsersButton.type = 'button';
            getUsersButton.value = 'Get Users';
            getUsersButton.onclick = function() {
                getUsers();
            };
            document.body.appendChild(getUsersButton);
            document.querySelector('#username').value = "";
            document.querySelector('#password').value = "";
            document.querySelector('#confirm-password').value = "";
            document.querySelector('#register-button').style.display = 'none';
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

function getUsers(){
    let tableBody = document.querySelector('#user-table-body');
    tableBody.innerHTML = ''; // clear the table body
    for(let i=0;i<lusername.length;i++){
        let tableRow = document.createElement('tr');
        let table_data= document.createElement('td');
        let table_data1= document.createElement('td');
        let table_data2= document.createElement('td');
        let table_data3= document.createElement('td');
        table_data.innerHTML=i;
        table_data1.innerHTML=lusername[i];
        table_data2.innerHTML=lpassword[i];
        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.onclick = function() {
            editUser(i);
        };
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function() {
            deleteUser(i);
        };
        table_data3.appendChild(editButton);
        table_data3.appendChild(deleteButton);
        tableRow.appendChild(table_data);
        tableRow.appendChild(table_data1);
        tableRow.appendChild(table_data2);
        tableRow.appendChild(table_data3);
        tableBody.appendChild(tableRow);
    }
}

function editUser(id){
    let temp=prompt("Enter the new value");
    lusername[id]=temp;
    savetoLocal();
}

function deleteUser(id) {
    lusername.splice(id, 1);
    lpassword.splice(id, 1);
    savetoLocal();
    getUsers(); // update the user table
}

function savetoLocal() {
    localStorage.setItem('uname', lusername.join(','));
    localStorage.setItem('pass', lpassword.join(','));
}