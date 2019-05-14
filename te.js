


const suma = async(n1, n2) => {
    let promise = new Promise((resolve, reject) => {
        
        if (isNaN(n1) || isNaN(n2)) {
            reject("Solo numeros")
        } else {
            resolve(parseFloat(n1) + parseFloat(n2))
        }
    })
    let resp ="";


    try {
        resp = await(promise);
    } catch (error) {
        resp = error;
    }
    
    console.log(resp)
}


suma("A", 1)