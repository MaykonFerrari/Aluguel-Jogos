let jogosAlugados = 0;


// Essa função é apenas para exibir o total de jogos Alugados.
function exibirJogosAlugados(){
    console.log(`Total de jogos Alugados: ${jogosAlugados}`);
}

// Função para alterar o status Alugado ou Não alugado
function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector(".dashboard__item__img");
    let botao = jogoClicado.querySelector(".dashboard__item__button");
    let nomeJogo = jogoClicado.querySelector(".dashboard__item__name");

    if(imagem.classList.contains("dashboard__item__img--rented")) {
        let confirmacaoDevolver = confirm(`Você realmente deseja devolver o Jogo ${nomeJogo.textContent}?`);
        if (confirmacaoDevolver) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        jogosAlugados--;
        }
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++;
    }

    exibirJogosAlugados();
}

document.addEventListener(`DOMContentLoaded`, function() {
    jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
});