var add = document.getElementById("input");
 var arr=[];
 var todolist=document.getElementById("todolist");
 document.getElementById("button").onclick=click;

 function click() {
    arr.push(input.value);
    console.log(arr);
    input.value = "";
    showlist();
  }
function showlist(){
    todolist.innerHTML = "";
    arr.forEach(function(n,i){
        todolist.innerHTML+=
        "<li>"+
        n +
        "<a onclick ='editItem(" +
        i + 
        ")'>Edit</a>" +
        "<a onclick='deleteItem(" +
        i +
        ")'>&times | </a></li>";
    });
}
function deleteItem(i){
    arr.splice(i,1);
    showlist();
}
function editItem(i){
    var newtask = prompt("Insert your new task");
    arr.splice(i,1,newtask);
    showlist()
}