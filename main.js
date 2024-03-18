const botoes = document.querySelectorAll(".botão");
console.log(botoes)
for (let i=0; i < botões.length; i++) {
    console.log(i);
    }
    for(let i=0;i <botoes.length;i++){
        botoes[i].onclick = function() {
        botoes[i].classList.add("ativo");
        }
    }
