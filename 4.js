function harga(Harga){
    if(Harga >= 25000){
        console.log("Mahal");
    }else if(Harga > 10000){
        console.log("Sedang");
    }else if(Harga > 0 && Harga < 10000){
        console.log("Murah")
    }else{
        console.log("Harga tidak valid");
    }
}

harga(25001);