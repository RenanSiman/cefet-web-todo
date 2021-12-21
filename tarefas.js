function Tarefa(nome, categoria, realizada) {
    this.nome = nome
    this.categoria = categoria
    this.realizada = realizada
}
 
let task1 = new Tarefa("Comprar leite","Compras", false)
let task2 = new Tarefa("Escutar Chimbinha","Lazer", true)

let listOfTasks = [task1,task2]
/*
    { nome: "Consertar Interfone", categoria: "Compras", realizada: false },
    { nome: "Implementar explicação explorável de redes neurais", categoria: "Estudos", realizada: false },
    { nome: "Estudar para prova de ML", categoria: "Estudos", realizada: false },
    { nome: "Escutar Chimbinha", categoria: "Lazer", realizada: true },
    { nome: "Comprar leite", categoria: "Compras", realizada: false },
*/

