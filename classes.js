class Person {
  name; // NO ES NECESARIO
  #age; // NO ES NECESARIO
  nationality; // NO ES NECESARIO
  static nationalityArr = ["US", "UK", "AUS", "CAN"];

  constructor(name, age, nationality) {
    this.name = name;
    if (typeof age === "number") {
      this.#age = age;
    } else {
      this.#age = Number(age);
    }
    this.nationality = nationality;
  }

  static validNationality(nat = "") {
    return Person.nationalityArr.reduce(
      (prev, curr) => prev || curr === nat,
      false
    );
  }
  sayAge() {
    return "I am" + " " +  this.#age + " " + "years old";
  }
  setAge(newVal) {
    if (newVal < 1) {
      this.#age = 1;
    } else if (newVal > 100) {
      this.#age = 110;
    } else {
      this.#age = newVal;
    }
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
    if (Person.validNationality(country)) {
      this.country = country;
    } else {
      console.log("Invalid Country");
    }
  }
}

let greg = new Student("Greg", 21, "Spain", "English");
// Prototype chain
// Object -> Person -> Student

console.log(Person.validNationality("UK"));
console.log(greg.sayAge());
greg.age = 40;
