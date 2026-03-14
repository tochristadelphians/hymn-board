const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQb8UDeP4MqBcpsJ0FklphnjHxLOFNsGNWtTQ1xcfOn1Mgx_ezQcE1xnw1A7-jFkxr6KW6bD1t5CaJ-/gviz/tq?tqx=out:json";

function updateBoard(){

fetch(sheetURL + "&t=" + Date.now())
.then(res => res.text())
.then(text => {

const json = JSON.parse(text.substring(47).slice(0,-2));
const rows = json.table.rows;

const data = rows.map(r => ({
label: r.c[0]?.v || "",
value: r.c[1]?.v || ""
}));

document.getElementById("label1").innerText = data[0].label;
document.getElementById("h1").innerText = data[0].value;

document.getElementById("label2").innerText = data[1].label;
document.getElementById("psalm").innerText = data[1].value;

document.getElementById("label3").innerText = data[2].label;
document.getElementById("reading").innerText = data[2].value;

document.getElementById("label4").innerText = data[3].label;
document.getElementById("h2").innerText = data[3].value;

document.getElementById("label5").innerText = data[4].label;
document.getElementById("h3").innerText = data[4].value;

document.getElementById("label6").innerText = data[5].label;
document.getElementById("h4").innerText = data[5].value;

document.getElementById("verse").innerText = data[6].value;
document.getElementById("reference").innerText = data[7].value;

document.body.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(" + data[8].value + ")";

});

}

updateBoard();

/* refresh every 30 seconds */
setInterval(updateBoard,30000);
