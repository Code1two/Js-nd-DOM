/*
Su Js sukurti lentelės generavimo įrankį (panašiai, kaip Word). 
Kai vartotojas formoje įveda stulpleių ir eilučių  skaičių  sugeneruojama html lentelė.
*/

document.querySelector('#tableForm').addEventListener('submit',(e) =>{
        e.preventDefault();

        let rows = parseInt(document.querySelector("#rows").value);
        let columns = parseInt(document.querySelector("#columns").value);

        let table = document.createElement("table");
        table.setAttribute('border', '1');
        for (let i = 0; i < rows; i++) {
                let row = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let cell = document.createElement('td');
                cell.textContent = (i + 1) + ",  " + (j + 1);
                row.appendChild(cell)
            }
            table.appendChild(row);
        }
        

        document.querySelector("section").innerHTML = '';
        document.querySelector('section').appendChild(table);
    });