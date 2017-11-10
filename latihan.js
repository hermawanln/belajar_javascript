/**
Untuk compile bisa ke jsfiddle.net
"" string kosong otomatis dikonversi jadi false tp kalau ada isinya dikonversi jadi true
[] string array kosong dianggap true
**/


//BASIC
var mencoba = function() {
  console.log("Mencoba");
}

function cobacoba() {
  //untuk melakukan output
  console.log("Hello world"); //tidak harus ada titik koma gpp
}
mencoba()
cobacoba()
console.log("________________________________________________________");
console.log("******BELAJAR ARRAY*****");
var array1 = []

for (var i = 0; i < 10; i++) {
  array1.push(i);
}
console.log(array1);
console.log("________________________________________________________");

//SINCRONUS
console.log("*****BELAJAR BUAT KALKULATOR*****");
function kalkulator(x, y, tipeOperasi){
  if (tipeOperasi=="tambah") {
    return x + y
  }else if (tipeOperasi=="kali") {
    return x * y
  }
}
var res = kalkulator(2,3,"tambah")
console.log("Hasil tambah adalah "+res);
console.log("________________________________________________________");

//ANONIMOUS function
console.log("*****ANONIMOUS FUNCTION*****");
function calc(x,y,callback){
  return callback(x,y)
}
console.log("Hasil anonimous function "+calc(2,3,function(x,y){return x+y}));
