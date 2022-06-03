let find = false;
let numberDrawn = 10;
let possibleValue = 0;

while (!find){
  possibleValue +=1;
  if(numberDrawn === possibleValue){
    find = true
  }else{
    console.log("Possible value does not match the number drawn " + possibleValue)
  }
}

