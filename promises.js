const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Success!')
        }
        else {
            reject('Error!')
        }

    }, 2000)
})

myPromise
.then((result) =>{
    console.log(result);
})
.catch((errror)=>{
    console.log(errror);
});