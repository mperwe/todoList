// Function to get List from LocalStorage
function getListFromStorage(){
    var todoList=localStorage.getItem("todoList")
    if(todoList && todoList.length > 0) {
        return JSON.parse(todoList)
    } else {
        return []
    }
}
//function to save items to LocalStorage
function saveTodoListToStorage(todoItems){
    localStorage.setItem("todoList", JSON.stringify(todoItems))
    displayToView()
}
//function to submit a todo
function onSubmitTodo(){  //On submit to do function
var todoList = getListFromStorage()  // variable to store todolist Items 
// get input text.
var todoItem = document.getElementById("todoInput").value
todoList.push(todoItem)
// store in local storage.
saveTodoListToStorage(todoList)
}
//function Display Item to View.
function displayToView(){
    var todoList=getListFromStorage()
 // acces the div element by id   
    var todoDiv = document.getElementById('todoListItems')
 // create an unordered list element   
    const todoListItems = document.createElement('ul') 
   // loop over array from localstorage
   for(let i=0;i<todoList.length;i++){
      const listItem = document.createElement("li")
// create a checkbox
      const checkbox = document.createElement("input")
      checkbox.type = 'checkbox'
      listItem.appendChild(checkbox)
// create text span
    const textSpan = document.createElement("span")
    textSpan.textContent = todoList[i]
    listItem.appendChild(textSpan)

// create edit icon
    const editIcon = document.createElement("i") 
    editIcon.className = "fa fa-pencil-square-o" 
    listItem.appendChild(editIcon)      

// create delete icon
    const deleteIcon = document.createElement("i")
    deleteIcon.className ="fa fa-trash"
    listItem.appendChild(deleteIcon)
    
    // append listItem to todoListItems UL
    todoListItems.appendChild(listItem)
    
        }
// append the UL to the div element
        todoDiv.appendChild(todoListItems)

}