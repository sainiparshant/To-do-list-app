const addBtn = document.querySelector(".add-task");
const inputBox = document.querySelector("input");
const list = document.querySelector("ul");

addBtn.addEventListener("click", function(){
    if(inputBox.value === ''){
        alert("Please Enter Something! ");
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerText = inputBox.value;
        list.appendChild(newTask);
        
        let Delete = document.createElement("button");
        Delete.innerText = "X";
        Delete.classList.add("del-btn");

        newTask.appendChild(Delete);
        list.appendChild(newTask);
       
    }
    inputBox.value='';
    saveData();

});


list.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let removeList = event.target.parentElement;
        removeList.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showData(){
    list.innerHTML = localStorage.getItem("data");
}
showData();


