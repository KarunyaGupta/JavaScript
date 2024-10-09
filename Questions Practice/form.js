const databtn = document.querySelector('#databtn');
const getDataBtn = document.querySelector('#getData');
let dataArray = [];

function convertDatatoObj(event){
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    let gender;
    if (document.querySelector('#male').checked) {
        gender = 'male';
    } else if (document.querySelector('#female').checked) {
        gender = 'female';
    } else {
        gender = 'other';
    }
    const subject = document.querySelector('#subject').value;
    const data = {
        name: name,
        age: age,
        gender: gender,
        subject: subject
    }
    dataArray.push(data);
    console.log(dataArray);
    alert("Data saved successfully!");
    return false;
}

function printDataToTable() {
    const tableBody = document.querySelector('#dataTableBody');
    tableBody.innerHTML = '';
    dataArray.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
            <td>${data.subject}</td>
        `;
        tableBody.appendChild(row);
    });
}

databtn.addEventListener("click", convertDatatoObj);

getDataBtn.addEventListener("click", function() {
    printDataToTable();
    this.disabled = true; // disable the button after clicking
});