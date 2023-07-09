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
