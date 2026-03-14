const sheetURL =
"https://docs.google.com/spreadsheets/d/1MmmFbv14UMZZ-4OsKwYRXvwOlTKeUy8q4x-DRAflQtg/gviz/tq?tqx=out:json&gid=0";

function updateBoard(){

fetch(sheetURL + "&t=" + Date.now())
.then(res => res.text())
.then(text => {

const json = JSON.parse(text.substr(47).slice(0,-2));
const rows = json.table.rows;

function cell(r,c){
const row = rows[r+1];   // skip header row
if(!row || !row.c[c]) return "";
return row.c[c].f || row.c[c].v || "";
}}}

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
