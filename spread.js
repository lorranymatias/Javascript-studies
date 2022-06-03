// let list = [1, 2, 5]
// let listAdd = [3, 4]

// console.log(list)
// console.log(listAdd)

// for (let i = 0; i < listAdd.length; i++) {
//   for(let j = 0; j < list.length; j++) {
//     if(list[j] >= listAdd[i]){
//       list.splice(j, 0, listAdd[i]);
//       j++
//     }
//   }
// }
// console.log(list)

// const listResult = [1, 2, ...listAdd, 5]

// console.log(listResult)


//With spread operator
// const listResult = [1, 2, ...listAdd, 5]

// console.log(listResult)


let array = ["a", "b", "c"]
let array2 = [...array]

array2.push("d")
console.log(`Array = ${array}`)
console.log(`Array2 = ${array2}`)