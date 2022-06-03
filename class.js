class math{
  sum(valuesA, valuesB){
    return valuesA + valuesB;
  }
  subtraction(valuesA, valuesB){
    return valuesA - valuesB;
  }
multiplication(valuesA, valuesB){
  return valuesA * valuesB;
}
division(valuesA, valuesB){
  return valuesA / valuesB;
}
}

let instanceMath = new Math();

let result = instanceMath.sum(3,4);

console.log(result);