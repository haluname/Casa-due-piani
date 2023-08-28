let nome = localStorage.getItem("nome")
let header = document.querySelector("header");

header.innerHTML+="di <h2 style=margin-left:20px;margin-right:20px;>" + nome + "</h2> (piano terra)";
console.log(nome)