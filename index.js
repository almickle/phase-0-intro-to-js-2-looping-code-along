function writeCards (array, event) {
    let newArray = []
    array.forEach(element => {
        newArray.push(`Thank you, ${element}, for the wonderful surprise gift!`)
    });
    return newArray
}

function countDown (integer) {
    for(let i = integer; i >= 0; i--) {
        console.log(i)
    }
}

countDown(10)