const sheetURL = "https://docs.google.com/spreadsheets/d/1MmmFbv14UMZZ-4OsKwYRXvwOlTKeUy8q4x-DRAflQtg/gviz/tq?tqx=out:json&gid=0";

fetch(sheetURL)
.then(function(res){
return res.text();
})
.then(function(text){
console.log(text);
});
