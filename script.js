const input= document.getElementById("input-box");
const container= document.getElementById("list");


function AddTask (){
    if(input.value === ''){
        alert("write Something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        container.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata()
    }
    input.value="";
}
container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",container.innerHTML);
}
function display(){
    container.innerHTML = localStorage.getItem("data");
}
