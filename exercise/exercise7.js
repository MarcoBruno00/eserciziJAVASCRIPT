function printName() {
    let helloName = "hello john"
    function inner() {
    console.log(helloName);
    }
   setTimeout(inner, 1000)
   return inner
}

printName();