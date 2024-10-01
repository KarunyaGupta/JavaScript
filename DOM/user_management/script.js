function getUsers(){

    for(let i=0;i<lusername.length;i++){
        let tableRow = document.createElement('tr');
        let table_data= document.createElement('td');
        let table_data1= document.createElement('td');
        let table_data2= document.createElement('td');
        table_data.innerHTML=i;
        table_data1.innerHTML=lusername[i];
        table_data2.innerHTML=lpassword[i];
        document.getElementById('table').appendChild(tableRow);


        tableRow.appendChild(table_data);
        tableRow.appendChild(table_data1);
        tableRow.appendChild(table_data2);
    }
}