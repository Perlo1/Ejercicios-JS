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

