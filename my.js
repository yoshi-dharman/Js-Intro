//exercise 1================================================================================================================================
console.log("Nama = Yoshi Dharman");
console.log("Asal daerah = batam");
console.log("Tanggal lahir = 30-11-1996");
console.log("Umur = 24");
console.log("Posisi pekerjaan = tidak ada");

//exercise 2================================================================================================================================

let bool = false;
while(!bool){
    prompt("Input Nama user");
    prompt("Input Negara");
    bool = confirm("Apakah data yang diisi sudah benar ?")
}

alert("Terima kasih sudah mengisi form");

//exercise 3================================================================================================================================
// console.log("Nama = Yoshi Dharman");
// console.log("Asal daerah = batam");
// console.log("Tanggal lahir = 30-11-1996");
// console.log("Umur = 24");
// console.log("Posisi pekerjaan = tidak ada");

// exercise 4===============================================================================================================================
/* 
let bool = false;
while(!bool){
    prompt("Input Nama user");
    prompt("Input Negara");
    bool = confirm("Apakah data yang diisi sudah benar ?")
}

alert("Terima kasih sudah mengisi form");
*/

// exercise 5================================================================================================================================
let dataDiri = {nama: 'Yoshi Dharman', asalDaerah: 'batam', tanggalLahir: '30-11-1996', umur: 24, pekerjaan: 'tidak ada'};
console.log("Nama = "+ dataDiri.nama);
console.log("Asal daerah = "+ dataDiri.asalDaerah);
console.log("Tanggal lahir = "+ dataDiri.tanggalLahir);
console.log("Umur = "+ dataDiri.umur);
console.log("Posisi pekerjaan = "+ dataDiri.pekerjaan);

// exercise 6================================================================================================================================
let operation1 = 25 + 10;
let operation2 = 100 * 2;
let operation3 = 99 / 2;
let operation4 = 99 % 2; 

console.log("Operation 1 = "+operation1);
console.log("Operation 2 = "+operation2);
console.log("Operation 3 = "+operation3);
console.log("Operation 4 = "+operation4);