let arr = [1,2,3,4]

let obj = {
    "key": 1,
    "key2" : 2
}

// console.log(Object.entries(obj));
for (let entry of Object.entries(obj)) {
    let [key, val] = entry;
    obj[key] = val / 4
}
console.log(obj);


let {key, key2} = obj;

console.log(key);
console.log(key2);