const setTimeoutPromise = function delayer(delay) {
    return new Promise((resolve) => {
            setTimeout(resolve, delay * 1000)
        });
    }

setTimeoutPromise(4)
    .then(() => {
        console.log(`Called after 4 seconds.`);
    });

const getCurrentLocation = () => {
        return new Promise((resolve,reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        }    

getCurrentLocation()
      .then((position) => {
          console.log(position.coords);
      })
      .catch((error) => {
        console.log(error)
      })

  