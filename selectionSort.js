const livros = require('./listaLivros')
const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual]
    let livroMaisBarato = livros[menor]
    livros[atual] = livroMaisBarato
    livros[menor] = livroAtual
}

console.log(livros)
