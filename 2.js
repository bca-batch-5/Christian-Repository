//Nomor 2
// kalau var itu dia bentukanya Hoisting atau bisa di lihat dia akan mengangkat 
// declerasinya terlebih dahulu
// jadi seperti ini 
// var x;
x=10;
var x;
console.log(x)

//Reassign
// di javascript jika kita menggunakan var dia bisa melakukan assign balik pada variable
// tentu hal ini bisa membuat orang bingung karna di bahasa pemrograman lain jika
// terjadi seperti ini akan error
var hello = 'hello';
var hello = 'hello2';
console.log(hello);

//blockScope
//di sini jika kita menggunakan var otomatis dia akan menjadi variable global jika ada
//scope di codingan lalu ada deklerasi dengan varaible yang sama dia tetap akan menimpa
//karna di sini var terbaca variable global
var a=2
if (true){
  var a=3
}
console.log(a)

//Let
//Reassign
//untuk variable let dia tidak bisa di reasign seperti ini
//dia akan error
// let foo ='hello1'
// let foo ='hello2'
// console.log(foo)

//Hoisting
// untuk declare dengan let ini juga nilai x akan undinefined karna let tidak di angkat
// ke atas
// x=10
// let x
// console.log(x)

//Scope
// untuk scope dari let sendiri dia block scope jadi jika di console.log maka hasilnya
// akan tetap dua karna ter block oleh if
let b=2
if (true){
  let b=3
}
console.log(b)

//Const
// const adalah declare variable yang nilainya tidak bisa di ubah atau static
// disini akan error karena const itu constant variable atau tidak bisa di ubah
// const result = 2
// result = 3;
// console.log(result);