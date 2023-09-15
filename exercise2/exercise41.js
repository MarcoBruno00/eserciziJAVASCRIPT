const user = {
  id: 1,
  name: "John",
  age: 24,
};

function dataFromLocalStorage() {
  const data= localStorage.getItem('user')
  if (data) {
    const parsedData= JSON.parse(data)
    console.log(parsedData);
  } else {
    console.log("user not found");
  }
}
dataFromLocalStorage()