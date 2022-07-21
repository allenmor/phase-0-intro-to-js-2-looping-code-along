let array = []
// Code your solutions in this file
const writeCards = function(name) {
    for(let i = 0; i < name.length; i++){
        array.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return array
}

const countDown = function(ten) {
    for(let i = 0; i < 11; i++){
        console.log(i)
    }
}

