const consum = () => {
    return new Promise( (resolve, reject) => {
            fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`)
            .then(res => res.json())
            .then(function(res){
                resolve(res)
            }
            )
    })
}

consum().then(res => console.log(res))