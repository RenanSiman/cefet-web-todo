const tasks = [
  {
    name: "Comprar leite",
    category: "compras",
    done: false,
  },
  {
    name: "Escutar Chimbinha",
    category: "lazer",
    done: true,
  },
];

function cleanTasks() {
  let listEl = document.querySelector("ul");
  listEl.innerHTML = "";
}

function insertTaskOnPage(task) {
  let containerEl = document.querySelector("main");
  let listEl = document.querySelector("ul");
  let topicEl = document.createElement("li");

  listEl.classList.add("lista-tarefas");
  topicEl.classList.add("item-tarefa");
  topicEl.classList.add(`categoria-${task.category}`);

  // marca como tarefa concluída
  if (task.done == true) topicEl.classList.add("marcado");

  topicEl.innerHTML = `${task.name}`;

  listEl.appendChild(topicEl);
  containerEl.appendChild(listEl);
}

function addTask() {
  let nameTaskEl = document.querySelector("input");
  let categoryEl = document.querySelector("select");

  nameTaskEl.classList.add("nova-tarefa-nome");
  categoryEl.classList.add("nova-tarefa-categoria");
  const task = {
    name: nameTaskEl.value,
    category: categoryEl.value,
    done: false,
  };

  insertTaskOnPage(task);
  nameTaskEl.value = "";
  nameTaskEl.focus();
}

let buttonInsert = document.querySelector("#incluir-nova-tarefa");
let filter = document.querySelector("#filtros")

// call Function
cleanTasks();
tasks.forEach(insertTaskOnPage);
buttonInsert.addEventListener("click", () => {
    addTask();
});

filter.addEventListener()
/*
    { name: "Consertar Interfone", category: "Compras", done: false },
    { name: "Implementar explicação explorável de redes neurais", category: "Estudos", done: false },
    { name: "Estudar para prova de ML", category: "Estudos", done: false },
    { name: "Escutar Chimbinha", category: "Lazer", done: true },
    { name: "Comprar leite", category: "Compras", done: false },
*/
