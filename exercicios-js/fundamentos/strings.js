const escola = "Cod3r"

//indice da string
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Código unicode
console.log(escola.indexOf('3'))

//SubString
console.log(escola.substring())
console.log(escola.substring(0,3))


//concatenar
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))


console.log('Ana, Maria, Pedro'.split(','))