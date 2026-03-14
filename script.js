const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQb8UDeP4MqBcpsJ0FklphnjHxLOFNsGNWtTQ1xcfOn1Mgx_ezQcE1xnw1A7-jFkxr6KW6bD1t5CaJ-/gviz/tq?tqx=out:json";

function updateBoard(){

fetch(sheetURL + "&t=" + Date.now())
.then(res => res.text())
.then(text => {

/* remove Google's wrapper */
const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));

const rows = json.table.rows;

function cell(r,c){
return rows[r].c[c] ? rows[r].c[c].v : "";
}

document.getElementById("label1").innerText = cell(0,0);
document.getElementById("h1").innerText = cell(0,1);

document.getElementById("label2").innerText = cell(1,0);
document.getElementById("psalm").innerText = cell(1,1);

document.getElementById("label3").innerText = cell(2,0);
document.getElementById("reading").innerText = cell(2,1);

document.getElementById("label4").innerText = cell(3,0);
document.getElementById("h2").innerText = cell(3,1);

document.getElementById("label5").innerText = cell(4,0);
document.getElementById("h3").innerText = cell(4,1);

document.getElementById("label6").innerText = cell(5,0);
document.getElementById("h4").innerText = cell(5,1);

document.getElementById("verse").innerText = cell(6,1);
document.getElementById("reference").innerText = cell(7,1);

document.body.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(" + cell(8,1) + ")";

});

}

updateBoard();
setInterval(updateBoard,30000);
