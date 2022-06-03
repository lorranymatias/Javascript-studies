let isValid = true

//No ternary
function verify(isValid){
  if(isValid){
    return true
  } else {
  return false
}
}

console.log(verify(isValid))

//With ternary
const result = isValid ? true : false

let zero = 0;
const numberResult = zero == 0 ? 0 : -1

console.log(numberResult)