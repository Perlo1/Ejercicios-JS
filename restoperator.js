let arr = [1,2,3,4];

let obj = {
    "key": 1,
    "key2" : 2,
    "nested": {
        "mult": 4,
        "str": "5"
    }
}

let newArr = [...arr, 3];
function makeNewArray(arr) {
    return [...arr, 1, 2]
}

let newObj = {"newkey": 45 ,...obj}
console.log(newObj);

class MyArray extends Array {
    custonName;

    constructor(custonName, ...rest) {
        super(rest);
        this.custonName = custonName;
    }
    sum() {
        return this.reduce((a,b) => a + b)
    }
}

let arr2 = new MyArray("something", 1, 2, 3, 4, 5)
console.log(arr2);