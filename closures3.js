function multiplyByTwo(number) {
    function inner(input) {
      return input * number;
    }
  
    return inner;
  }
  
  const multiplyByTwoResult = multiplyByTwo(2);
  console.log(multiplyByTwoResult(4)); // Output: 8
  