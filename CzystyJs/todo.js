// const inputText = document.getElementById("input_box")
// const listElement = document.getElementById("to_do_list")

// function addElement(){
//     const newElement = document.createElement("li");

//     const toDoElement = document.createElement("span");

//     toDoElement.classList.add("span")

//     toDoElement.textContent = inputText.value;

//     newElement.appendChild(toDoElement);

//     listElement.appendChild(newElement);

//     const deleteElement = document.createElement("button");
//     deleteElement.textContent = "Delete";
//     deleteElement.classList.add('delete');
//     deleteElement.onclick = function () {
//         newElement.remove();
//     }
//     newElement.appendChild(deleteElement);

//     const editElement = document.createElement("button");
//     editElement.textContent = "Edit"
//     editElement.classList.add('edit');
//     editElement.onclick = function () {
//         if (editElement.textContent === "Edit"){
//             toDoElement.contentEditable = "true";
//             toDoElement.focus();
//             editElement.textContent = "Save"
//         } else {
//             editElement.textContent = "Edit"
//             toDoElement.contentEditable = "false";
//         }
//     }
//     newElement.append(editElement)

//     inputText.value = "";
// }