class Person {
  name; // NO ES NECESARIO
  age; // NO ES NECESARIO
  nationality; // NO ES NECESARIO
  static nationalityArr = ["US", "UK", "AUS", "CAN"];

  constructor(name, age, nationality) {
    this.name = name;
    if (typeof age === "number") {
      this.age = age;
    } else {
      this.age = Number(age);
    }
    this.nationality = nationality;
  }

  static validNationality(nat = "") {
    return Person.nationalityArr.reduce((prev, curr) => prev || curr === nat, false);
  }
}

class Student extends Person {
  constructor(name, age, nationality, subject) {
    super(name, age, nationality);
    this.subject = subject;
  }
}

class School {
    country;
    constructor(country) {
        if(Person.validNationality(country)) {
            this.country = country;
        } else {
            console.log("Invalid Country");
        }
    }

}

let greg = new Student("Greg", 21, "Spain", "English");
// Prototype chain
// Object -> Person -> Student

console.log(greg.__proto__.__proto__);
console.log(Person.validNationality("UK"));