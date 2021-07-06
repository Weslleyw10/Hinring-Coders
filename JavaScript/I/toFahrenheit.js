
function toFahrenheit(input) {
    if(typeof(input) != 'number') {
        return 'Informe um número válido'
    }

    return (input * 1.8 + 32)

}

let result = toFahrenheit(32)

console.log(result)