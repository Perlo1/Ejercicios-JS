const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is not greater than 10");
    }
  });
};

const myNumber = 15;

checkNumber(myNumber)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((errorMessage) => {
    console.log("Error:", errorMessage);
  });