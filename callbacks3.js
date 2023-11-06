function repeatHello(callback) {
  const intervalId = setInterval(callback, 1000); // Repeat the provided callback every 1 second

  // Clear the interval after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}

const sayHello = () => {
  console.log("Hello");
};

repeatHello(sayHello);
