var Ganjil=[];
var Genap=[];
const evenOdd = (nilai) =>{
    for(let i = 0; i < nilai.length; i++){
        if(nilai[i] %2 == 0){
            Genap.push(nilai[i]);
        }else{
            
            Ganjil.push(nilai[i]);
        }
    }
    console.log(`Ganjil:[${Ganjil}]`);
    console.log(`Genap:[${Genap}]`);
}

evenOdd([1,2,3,4,5,6]);