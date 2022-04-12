let result = "";
for (let i = 0; i < 5; i++) {
  result += "\n";
  for (let j = 0; j < 5; j++) {
    if(i == 0 || i == 4){
    result += "1";
    }else if(j == 0 || j == 4){
      result += "1";
    } else{
      result += " ";
    }
    
  }
}
console.log(result);
