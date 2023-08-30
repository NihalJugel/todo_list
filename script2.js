(function(){
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const taskCounter = document.getElementById("task-counter");
    
    // console.log("Working")
    // listContainer.appendChild(taskCounter);

    function addTask(text){
        const li = document.createElement('li');
        li.textContent= text;
        listContainer.appendChild(li);

        let deleteButton = document.createElement('span');
        deleteButton.textContent = '\u00d7';
        li.appendChild(deleteButton);

        taskCounter.textContent = `Task : ${listContainer.querySelectorAll("li").length}`;
    }
    function handleInputKeypress(e){
        if (e.key === 'Enter'){
            const text = inputBox.value.trim();
            if (!text){
                alert("Add Task Section cannot be Empty!");
                return;
            }
            addTask(text);
            inputBox.value = "";
        }
    }
    
    listContainer.addEventListener('click',function(e){
        if (e.target.tagName === "LI"){
            e.target.classList.toggle('checked');
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            taskCounter.textContent = `Task: ${listContainer.querySelectorAll('li').length}`;
        }
    },false);
    // --------------------------------------animation
    const box = document.querySelector(".box");
    const divs = [];

    
    
    function intializeApp(){
        inputBox.addEventListener('keyup', handleInputKeypress);    
    }

    intializeApp();

})()



