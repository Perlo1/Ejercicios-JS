function isLoggedIn(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.random();
      if (userId > 5) {
        resolve({"name": "Greg", "otherData" : "Hello"});
      } else {
        reject(new Error("Not logged in!"));
      }
    }, 500);
  });
}
