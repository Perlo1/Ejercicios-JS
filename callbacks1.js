function printAsyncName(callback, name) {
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log(name);
    }, 2000);
  }, 1000);
}

const name = "John";

printAsyncName(() => {
}, name);
