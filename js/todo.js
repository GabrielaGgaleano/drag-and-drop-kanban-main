const form = document.getElementById('todo-form'); // form todo
const form_dialog = document.getElementById('todo-dialog'); // form todo
const todoLane = document.getElementById('todo-lane'); // elemento html para criação de draggable não mexer
const add_Card = document.getElementById('add_Card'); // ok (achar erro na funcionalidade do evento preventDefaut olhar)
const edit_Card = document.getElementById('edit_Card'); //usar valor para pegar todos os card e escolher qual editar
const test_add_card = document.getElementById('teste'); //usar valor para pegar todos os card e escolher qual editar
const remove_Card = document.getElementById('remove_Card'); //usar valor para pegar todas os card e excluir algum
const createInput = document.getElementById("todo-create-input"); //pega valor que tem esse id
const editInput = document.getElementById("todo-edit-input"); //pega valor que tem esse id


class Card {
  constructor(id, value) {
      this.id = id
      this.value = value;

      console.log(id);
  }

  createCard() {
      //verify last card - remover quando o backend mandar o id
      const cards = document.querySelectorAll('div.line.task')

      console.log('create div card')
      //move to draggable
      const card = document.createElement("div");
      card.classList.value = "line task";
      card.setAttribute("id", `card${this.existCard(this.id)}`)
      card.innerHTML = "";

      card.setAttribute("draggable", "true");

      card.addEventListener("dragstart", () => {
          card.classList.add("is-dragging");
      });

      card.addEventListener("dragend", () => {
          card.classList.remove("is-dragging");
      });

      //add text
      console.log('create p card')
      const p = document.createElement("p");
      p.innerHTML = this.value;
      p.setAttribute("id", `descripition-card${this.id}`)
      //adicionar o id no elemento P

      //add button edit
      console.log('create edit card')
      const edit = document.createElement("button");
      edit.classList.value = "col s3 fa-solid fa-pen-to-square";
      // edit.setAttribute("data-toggle", "modal");
      // edit.setAttribute("data-target", "#modalUpdate");
      edit.setAttribute("onclick", `editCard(${this.id});`);

      //add button trash
      console.log('create trash card')
      const trash = document.createElement("button");
      trash.classList.value = "col s3 fa-solid fa-trash";
      trash.setAttribute("onclick", `deleteCard(${this.id});`);

      //add child's in card
      console.log('create card child')
      card.append(p);
      card.append(edit);
      card.append(trash);

      return card;
  }

  editCard() {
    const newValue = editInput.value;
    console.log(newValue);
  }

  existCard(id) {
    let card = document.querySelector(`#card${id}`)
    if(!card) return id
    const index = Math.floor(Math.random() * 100)
    this.existCard(index)
  }

}

//capturando o evento com preventDefault para PAGINA NÃO ATUALIZAR NÃO MEXE
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addCard() {
  const value = createInput.value; 

  if (!value) return;

  const index = Math.floor(Math.random() * 100)

  const card = new Card(index, value)
  const card_create = card.createCard()
  todoLane.appendChild(card_create);

  clearDialog()
}

function editCard(id) {
  console.log(id)

  const editInput = document.getElementById(`descripition-card${id}`);
  const inputAux  = document.getElementById('aux-edit-input');

  const value = editInput.innerHTML; 

  inputAux.value = id;

  document.getElementById('todo-edit-input').innerHTML = value;

  $('#modalUpdate').modal('show');

  return;
}

function editCardReal() {
  const id = document.getElementById('aux-edit-input').value;
  const editInput = document.getElementById('todo-edit-input').value;

  document.getElementById(`descripition-card${id}`).innerHTML = editInput;

  $('#modalUpdate').modal('hide');

  document.getElementById('todo-edit-input').value = '';

  return;
}

// function editCard(id) {
//   //edit card
//   todoLane.querySelector(`#descripition-card${id}`).innerHTML = "abulele"
// }

function deleteCard(id) {
    window.alert("Deseja realmente excluir este item?")
  todoLane.querySelector(`#card${id}`).remove()
}

function clearDialog() {
  createInput.value = "";
}


