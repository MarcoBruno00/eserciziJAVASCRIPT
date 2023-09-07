const number = 15;

myPromise().then ( res => console.log(res)).catch( err => console.log(err))



function myPromise() {
    return new Promise ((resolve , reject) => {
        if (number > 10){
            setTimeout(() => {
                resolve(number)
            }, 0);
        } else {
            reject("error")
        }
    })
}
