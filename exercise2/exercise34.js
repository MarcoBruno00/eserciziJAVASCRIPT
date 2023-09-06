function printAsyncName(callback, name= "name" ) {
    let time = setInterval(callback , 1000)
    setTimeout(() => clearInterval (time), 1000)
    let herName= setInterval(()=> console.log(name), 2000)
    setTimeout(()=> clearInterval(herName), 2000)
}

printAsyncName(()=> console.log("hi"))
