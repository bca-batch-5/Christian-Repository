function fazzTrack(Value){
    for(let i = 1 ; i <= Value ; i++){
        if(i %5 == 0 && i %3 == 0){
            console.log(`fazz track`)
        }else if(i %5 == 0){
            console.log(`${i}:track`)
        }else if(i %3 == 0){
            console.log(`${i}:fazz`)
        }else{
            console.log(i);
        }
    }
}

fazzTrack(30);