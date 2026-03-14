const sheetURL = "https://docs.google.com/spreadsheets/d/1MmmFbv14UMZZ-4OsKwYRXvwOlTKeUy8q4x-DRAflQtg/gviz/tq?tqx=out:json&gid=0";

function updateClock(){

const now = new Date();

let h = now.getHours();
let m = now.getMinutes();

if(m < 10) m = "0" + m;

document.getElementById("clock").innerText = h + ":" + m;

}

updateClock();
setInterval(updateClock,1000);

function updateBoard(){

fetch(sheetURL + "&t=" + Date.now())
.then(function(res){
return res.text();
})
.then(function(text){

var json = JSON.parse(text.substring(47, text.length-2));
var rows = json.table.rows;

function get(r,c){
if(!rows[r] || !rows[r].c[c]) return "";
return rows[r].c[c].f || rows[r].c[c].v || "";
}

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

/*document.body.style.backgroundImage =
"linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(" + get(9,1) + ")";*/

});

}

updateBoard();
setInterval(updateBoard,30000);
