// class List {
//     constructor() {
//         this.data = []
//     }
//     add(data) {
//         this.data.push(data)
//         console.log(this.data)
//     }
// }
// class TodoList extends List {
//     constructor() {
//         super()
//         this.usuario = 'Lucas Miller'
//     }
//     mostraUsuario() {
//         console.log(this.usuario)
//     }
// }
// const MinhaLista = new TodoList()
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo')
// }
// MinhaLista.mostraUsuario()
// class Math {
//     static sum(a, b) {
//         return a + b
//     }
// }
// console.log(Math.sum(12, 2))
// const user = {name: 'Lucas'}
// user.name = 'Miller'
// console.log(user) 
// function teste(x) {
//     let y = 2
//     if(x > 5) {
//         console.log(x, y)
//     }
// }
// teste(10)
// const arr = [1, 3, 4, 5, 8, 9]
// const newArr = arr.map(function(item, index) { // Cada item da função vai passar por aqui
//     return item + index
// })
// console.log(newArr)
// const sum = arr.reduce(function(total, next) {
//     return total + next
// })
// console.log(sum)
// const filt = arr.filter(function(item) {
//     return item % 2 === 0
// })
// console.log(filt)
// const found = arr.find(function(item) {
//     return item  === 2
// })
// console.log(found)
// const arr = [1, 3, 4, 5, 6]
// const newArr = arr.map(item => item * 2 )
// console.log(newArr)
// const teste = () => ({ name: 'Lucas' })
// console.log(teste())
// const soma = (a = 2, b = 9) => a + b
// console.log(soma(1))
// console.log(soma(2))
// const usuario = {
//     nome: 'Lucas',
//     idade: 22,
//     endereco: {
//         cidade: 'Rio Grande do Sul',
//         estado: 'SC',
//     },
// }
// const { nome, idade, endereco: { cidade } } = usuario
// console.log(nome)
// console.log(idade)
// console.log(cidade)
// function showName({ nome }) { // Desestruturação
//     console.log(nome, idade)
// }
// showName(usuario)
// REST
// const usuario = {
//     nome: 'Lucas',
//     idade: 22,
//     Trabalho: 'TI'
// }
// const { nome, ...resto } = usuario
// console.log(nome)
// console.log(resto)
// const arr = [1, 2, 3, 4]
// const [ a, b, ...c ] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// function sum(a, b, ...params) {
//     return params
// }
// console.log(sum(1, 3, 9, 8))
// SPREAD
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [ ...arr1, ...arr2 ] // as retisencias usadas, dessa forma, vai copiar cada uma das informações do array e colocar aqui.
// console.log(arr3)
// const user1 = {
//     name: 'Lucas',
//     age: 22,
//     toWork: 'TI' 
// }
// const user2 = { ...user1, name: 'Miller' } // Vai copiar todas as informações do usuário1 
// console.log(user2)
// Object short syntax
// const name = 'Miller'
// const age = 22
// const user = {
//     name,
//     age,
//     toWork: 'IT'    
// }
// console.log(user)
"use strict";
