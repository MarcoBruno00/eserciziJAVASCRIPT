const reapeatHello = (callback) => {
    setInterval(callback , 1000)
}

const sayHello = () => {
    console.log("hello");
}

reapeatHello(sayHello)