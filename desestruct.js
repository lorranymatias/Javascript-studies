const person = {
  name: "Lorrany",
  lastName: "Oliveira",
  age: 31,
  profession: "Full Stack Developer"
}

console.log(person)

//No destruction

// let name = person.name
// let lastName = person.lastName
// let age = person.age
// let profession = person.profession

//With destruction

let {name, lastName, age, profession} = person
console.log(name, lastName, age, profession)