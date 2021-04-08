/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const programas = ['Discord', 'Skype', 'Teamspeak', 'Discor', 'Emulator']


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const  programnnFunction = function( arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(programnnFunction(1));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function paraNumbers( numbers, index) {
    return numbers [index];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const valores = [1, 'String' , null, undefined, 1.2]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(valores)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( nomeLivros) {

    const livros = {
        'O Homem mais Rico da Babilônia': {
            quantidadePaginas: 144,
            autor: 'George Samuel Clason',
            editora: 'HarperCollins',
        },
        
        'Pai Rico, Pai Pobre': {
            quantidadePaginas: 192,
            autor: 'Kiyosaki, Robert',
            editora: 'Alta Books',

        },
        'A volta ao mundo em 80 Dias': {
            quantidadePaginas: 264 ,
            autor: 'Júlio Verne',
            editora: 'Moderna',
        },
    }

    return !nomeLivros ? livros : livros [nomeLivros]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'O Homem mais Rico da Babilonia'
console.log('O livro ' + bookName + 'tem ' + book('O Homem mais Rico da Babilônia').quantidadePaginas + ' páginas! ')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro ' + bookName + ' é ' +book('O Homem mais Rico da Babilônia').autor )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro ' + bookName + ' foi publicado pela editora ' + editoraLivro )
