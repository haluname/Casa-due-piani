let nome = localStorage.getItem("nome")
let header = document.querySelector("header");

header.innerHTML+="di <h2 style=margin-left:20px;margin-right:20px;>" + nome + "</h2> (primo piano)";
console.log(nome)


let btn = document.querySelectorAll("button");

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click",function(e){
        let dataValue = e.target.getAttribute("data-num");
        let stanza = document.querySelector(".stz" + dataValue)
        let controllo = window.getComputedStyle(stanza).display;    //prende il valore di css del display qualunque esso sia
        if(controllo === "none"){   
            stanza.style.display = "block";
        }
        else{
            stanza.style.display = "none";
        }
        
    })
}