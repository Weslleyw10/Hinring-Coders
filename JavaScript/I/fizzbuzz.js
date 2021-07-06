// FizzBuzz
// Divisivel por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for um número => 'Não é um número
// Se não for divisivel nem por 3 e nem por 5 => Entrada


function FizzBuzz(input) {
    if(typeof(input) != 'number') {
        console.log('Não é um número')
    } else if(input % 3 === 0 && input % 5 === 0) {
        console.log('FizzBuzz')
    } else if (input % 3 === 0) {
        console.log('Fizz')
    } else if (input % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log('Entrada')
    }

}

FizzBuzz(12)


