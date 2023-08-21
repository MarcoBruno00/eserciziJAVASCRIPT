function printName() {
    let helloName = "hello john"
    function inner() {
        return helloName
    }
    return inner
}

console.log(printName()());