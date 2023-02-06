class Card {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }

    createCard(){
        //move to draggable
        const card = document.createElement("div");
        card.classList.add("task");
        card.setAttribute("draggable", "true");

        card.addEventListener("dragstart", () => {
            card.classList.add("is-dragging");
        });

        card.addEventListener("dragend", () => {
            card.classList.remove("is-dragging");
        });

        //add text
        const p = document.createElement("p").innerHTML = this.value;

        //add button edit
        const edit = document.createElement("button").innerHTML = this.value;
        edit.classList("col s3 fa-solid fa-pen-to-square")
       //  edit.setAttribute("data-toggle", "modal");
      //   edit.setAttribute("data-target", "#modalUpdate");
        edit.setAttribute("onclick", $("#modalUpdate").modal("show"));

        //add button trash
         const trash = document.createElement("button").innerHTML = this.value;
         trash.setAttribute("onclick", `deleteCard(${this.id});`);

        //add child's in card
        card.appendChild(p);
        card.appendChild(edit);
       card.appendChild(trash);

        return card;
    }
  
}

export default Card