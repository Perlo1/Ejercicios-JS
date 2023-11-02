// function Person(name, age, nationality) {
//     this.name = name;
//     if(typeof(age) === "number") {
//         this.age = age;
//     } else {
//         this.age =  Number(age)
//     }
//     this.nationality = nationality;
// }

class Person {
  constructor(name, age, nationality) {
    this.name = name;
    if (typeof age === "number") {
      this.age = age;
    } else {
      this.age = Number(age);
    }
    this.nationality = nationality;
  }
}

let greg = new Person   ("Greg", 28, "US")