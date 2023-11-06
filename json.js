class Child {
    age;
    name;
    constructor(age, name) {
        this.age = age;
        this.name = name;
    } 
}

let json = {
    "name" : "Sally",
    "birthday" : new Date(1987, 10, 13),
    "children" : [
        new Child(4, "Billy"),
        new Child(3, "Sally Jr.")
    ]
}

let str = JSON.stringify(json)
console.log(str);