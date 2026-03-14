const sheetURL =
"https://docs.google.com/spreadsheets/d/1MmmFbv14UMZZ-4OsKwYRXvwOlTKeUy8q4x-DRAflQtg/gviz/tq?tqx=out:json&gid=0";

function updateBoard(){

fetch(sheetURL + "&t=" + Date.now())
.then(res => res.text())
.then(text => {

const json = JSON.parse(text.substring(47).slice(0,-2));
const rows = json.table.rows;

function get(r,c){
const cell = rows[r]?.c[c];
if(!cell) return "";
return cell.f || cell.v || "";
}

/* rows start at 1 because row 0 is header */

document.getElementById("label1").innerText = get(1,0);
document.getElementById("h1").innerText = get(1,1);

document.getElementById("label2").innerText = get(2,0);
document.getElementById("psalm").innerText = get(2,1);

document.getElementById("label3").innerText = get(3,0);
document.getElementById("reading").innerText = get(3,1);

document.getElementById("label4").innerText = get(4,0);
document.getElementById("h2").innerText = get(4,1);

document.getElementById("label5").innerText = get(5,0);
document.getElementById("h3").innerText = get(5,1);

document.getElementById("label6").innerText = get(6,0);
document.getElementById("h4").innerText = get(6,1);

document.getElementById("verse").innerText = get(7,1);
document.getElementById("reference").innerText = get(8,1);

document.body.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(" + get(9,1) + ")";

});

}

updateBoard();
setInterval(updateBoard,30000);
