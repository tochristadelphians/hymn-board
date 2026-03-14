const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQb8UDeP4MqBcpsJ0FklphnjHxLOFNsGNWtTQ1xcfOn1Mgx_ezQcE1xnw1A7-jFkxr6KW6bD1t5CaJ-/pub?gid=0&single=true&output=csv";

function updateBoard(){

fetch(sheetURL + "&t=" + new Date().getTime())
.then(res => res.text())
.then(data => {

const rows = data.split("\n").map(r => r.split(","));

document.getElementById("label1").innerText = rows[1][0].trim();
document.getElementById("h1").innerText = rows[1][1].trim();

document.getElementById("label2").innerText = rows[2][0].trim();
document.getElementById("psalm").innerText = rows[2][1].trim();

document.getElementById("label3").innerText = rows[3][0].trim();
document.getElementById("reading").innerText = rows[3][1].trim();

document.getElementById("label4").innerText = rows[4][0].trim();
document.getElementById("h2").innerText = rows[4][1].trim();

document.getElementById("label5").innerText = rows[5][0].trim();
document.getElementById("h3").innerText = rows[5][1].trim();

document.getElementById("label6").innerText = rows[6][0].trim();
document.getElementById("h4").innerText = rows[6][1].trim();

document.getElementById("verse").innerText = rows[7][1].trim();
document.getElementById("reference").innerText = rows[8][1].trim();

const bg = rows[9][1].trim();
document.body.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(" + bg + ")";

});

}

updateBoard();

setInterval(updateBoard,10000);
