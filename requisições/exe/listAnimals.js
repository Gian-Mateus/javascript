const list = () => {
    return new Promise((resolve, rej) =>{
        fetch("http://cafepradev.com.br:21020/animals/list")
        .then(res => res.json())
        .then(function(res){
            resolve(res)
        })
    }
    )
}

list().then(res => console.log(res))