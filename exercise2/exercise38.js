const isLogged = true;
const firstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
      if (isLogged) {
        const randomNum = Math.random();
        resolve(randomNum);
      } else {
        reject('User is not logged in');
      }
    });
  };
  
  const secondPromise = (num) => {
    return new Promise((resolve, reject) => {
      if (num > 0.5) {
        const data = { name: "John", age: 24 };
        resolve(data);
      } else {
        reject('Number is not greater than 0.5');
      }
    });
  };
  
  firstPromise(isLogged)
    .then((num) => secondPromise(num))
    .then((finalData) => console.log(finalData))
    .catch((error) => console.error(error));