function ongkos(jarak){
    let ongkos= 0;
    if(jarak <= 2){
        ongkos += 5000;
        console.log(ongkos);
    }else if(jarak > 2){
        let jarakLebih = jarak - 2;
        let ongkosTambah = 3000*jarakLebih;
        ongkos = 5000 + ongkosTambah;
        console.log(ongkos);
    }
}
ongkos(9);