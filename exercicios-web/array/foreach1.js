const aprovados = ['Agatha', 'Aldo' , 'Daniel', 'Raquel']
//Por padrão são 3 elementos
aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})

console.log('-----')
aprovados.forEach(nome => console.log(nome))

console.log('-----')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)