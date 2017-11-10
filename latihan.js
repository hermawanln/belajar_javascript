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

//HIGER ORDER FUNCTION
console.log("*****HIGER ORDER FUNCTION*****");
var jenisPohon = [
  {name:"padi",akar:"serabut"},
  {name:"jeruk",akar:"tunggang"},
  {name:"jagung",akar:"serabut"},
  {name:"mangga",akar:"tunggang"},
]

var tunggang = jenisPohon.filter(function (pohon) {return pohon.akar == "tunggang"})


var tunggang = []
for(var i = 0; i<jenisPohon.length;i++){
  if(jenisPohon[i].akar=="tunggang"){
    tunggang.push(jenisPohon[i])
  }
}
console.log(tunggang)

//PROMISE
console.log("*****PROMISE*****");

function checktrue(data){
  return new Promise(function(resolve, reject){
    if (data) {
      resolve("truthy")
    }else {
      reject("falsy")
    }
  })
}
//cara memanggil Promise
checktrue(false) //ganti true atau false untuk mengeluarkan true or false
        .then(function(hasil){
          console.log("dari then");
          console.log(hasil);
        })
        .catch(function(hasil){
          console.log("dari catch");
          console.log(hasil);
        })
console.log("Selesai");
