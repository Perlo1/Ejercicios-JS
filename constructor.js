function Person(first, last) {
    this.firstName = first,
    this.lastName = last
}

const person1 = new Person("Jose", "Parrilla")
const person2 = new Person("Pepe", "Viyuela")

person1.age = 32;

console.log(person1);
console.log(person2);

function Person(name, age, nationality) {
    this.name = name;
    if(typeof(age) === "number") {
        this.age = age;
    } else {
        this.age =  Number(age)
    }
    this.nationality = nationality;
}