function printName() {
    const helloName = "Hello John";
  
    function inner() {
      console.log(helloName);
    }
  
    return inner;
  }
  
  // Create a closure by calling printName and assigning its return value to a variable.
  const sayHello = printName();
  
  // Call the inner function, which has access to the helloName variable.
  sayHello(); // Output: "Hello John"
  