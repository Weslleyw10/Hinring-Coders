

function reverseStr(input) {
    if (typeof(input) !== 'string') {
        return 'Informe um nome'
    }

    let str = ''

    let newStr = input.split('')
    newStr.reverse()

    newStr.forEach(letter => {
        str += letter
        console.log(str)    
    });

}


reverseStr('Weslley')