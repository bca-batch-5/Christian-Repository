var Ganjil=[];
var Genap=[];
const evenOdd = (nilai) =>{
    for(let i = 0; i < nilai.length; i++){
        if(nilai[i] %2 == 0){
            Ganjil.push(nilai[i]);
        }else{
            Genap.push(nilai[i]);
        }
    }
    console.log(`Ganjil:[${Ganjil}]`);
    console.log(`Genap:[${Genap}]`);
}

evenOdd([1,2,3,4,5,6]);