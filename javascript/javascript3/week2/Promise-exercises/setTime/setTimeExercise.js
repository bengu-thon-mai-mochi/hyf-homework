function delayLog(resolveAfter) {
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(console.log(`I am called asynchronously ${resolveAfter} seconds.`))
        }, resolveAfter * 1000)
    })
}

delayLog(3);
delayLog(6);
