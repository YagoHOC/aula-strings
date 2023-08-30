//Exercício dia 30/08 Strings e Arrays

// let array
// console.log('a. ', array)
// a.undefined

// array = null
// console.log('b. ', array)
// b.null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// c.11

// let i = 0
// console.log('d. ', array[i])
// d.3

// array[i+1] = 19
// console.log('e. ', array)
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// f. 9

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ONIBUS EM MIRROCOS, 27

//1.
const nome = prompt('Qual é seu nome?')
const email = prompt('Qual é seu email?')
console.log('O e-mail '+email+' foi cadastrado com sucesso. Seja bem-vindo(a), '+nome)

//2.
const comidas = ['pizza','burguer','sushi','pasta','barbecue']
console.log(comidas)
console.log('Essas são minhas comidas favoritas: ')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

console.log('Essas são minhas comidas favoritas com a sua em segundo lugar: ')
comidas[1] = prompt('Qual a sua comida favorita?')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

//3,
listaDeTarefas = [null]
listaDeTarefas[0] = prompt('Me diga uma tarefa que você realiza no dia-a-dia')
listaDeTarefas[1] = prompt('Me diga outra tarefa que você realiza no dia-a-dia')
listaDeTarefas[2] = prompt('Me diga mais uma tarefa que você realiza no dia-a-dia')
console.log(listaDeTarefas)

indice = Number(prompt('Me diga o índice da tarefa que você já fez (0,1 ou 2)'))
listaDeTarefas.splice(indice,1)
console.log(listaDeTarefas)

//Receba uma frase e retorne um array onde cada elemento é uma das
//palavras da frase, ignorando os espaços

const frase = prompt('Me diga uma frase')
const arrFrase = frase.split(' ')
console.log(arrFrase)


// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"] , faça um
// programa que acha o índice da palavra Abacaxi e imprime tanto o índice
// quanto o tamanho do array


array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const index = array.indexOf('Abacaxi')
console.log('O índice do abacaxi é '+index+' e o número de elementos do array é '+array.length)


// Escreva um programa que receba uma lista de palavras, e exiba as palavras que tenham número par de caracteres.

const lista = prompt('Me liste palavras, separadas por vírgula.')
const arrLista = lista.split(',')
console.log(arrLista)
const nomes = arrLista.filter(element => element.length%2 == 0);
console.log(nomes)


// Escreva um programa que recebe uma frase do usuário e conta o número de vogais.

const frase1 = prompt('Escreva uma frase')
const arrFrase1 = frase1.split('')
const vogais = 'aeiouAEIOU'
const contagem = arrFrase1.filter(caractere => vogais.includes(caractere)).length
console.log(contagem)






