let btn = document.querySelector("button");
let text = document.querySelector("#text");

btn.addEventListener("click",function(){
    if(text.value == ""){
        alert("Scrivere un nome")
    }
    else{
        localStorage.setItem("nome", text.value)
        window.open("pag2.html", "_self")
    }   
})