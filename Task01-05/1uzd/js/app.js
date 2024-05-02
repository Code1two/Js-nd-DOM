/*
Su Js sukurti lentelės generavimo įrankį (panašiai, kaip Word). 
Kai vartotojas formoje įveda stulpleių ir eilučių  skaičių  sugeneruojama html lentelė.
*/

document.querySelector('#tableForm').addEventListener('submit',(e) =>{
        e.preventDefault();

        let rows = parseInt(document.querySelector("#rows").value);
        let columns = parseInt(document.querySelector("#columns").value);

        let tableHTML = "<table border='1'>";

        for (let i = 0; i < rows; i++) {
            tableHTML += "<tr>";
            for (let j = 0; j < columns; j++) {
                tableHTML += "<td> " + (i + 1) + ",  " + (j + 1) + "</td>";
            }
            tableHTML += "</tr>";
        }
        tableHTML += "</table>";

        document.querySelector("section").innerHTML = tableHTML;
    });