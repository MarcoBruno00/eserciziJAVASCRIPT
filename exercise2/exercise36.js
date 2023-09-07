const reapeatHello = (callback) => {
   const delay= setInterval(callback , 1000)
   setTimeout(() => clearInterval (delay) ,5000)
}

const sayHello = () => {
    console.log("hello");
}

reapeatHello(sayHello)
