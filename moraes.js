function escolhaPosicao(dominio){
   let posicao = parseInt(prompt("Digite a posicao do jogador (1.goleiro, 2.lateral, 3.zagueiro, 4.meia, 5.atacante) " + (i+i) + ": "));
   return dominio[posicao-1];
}

const qtdeJogador = 5;

let nomes = [];
let posicoes = [];

let dominio = ["goleiro", 'zagueiro', "lateral", 'meio', 'atacante'];

for(let i = 0; i < qtdeJogador; i++){
   let nome = prompt("Digite o nome do jogador " + (i + 1) + ": ")
   nomes.push(nome)

   posicoes.push(escolhaPosicao(dominio))
}

for(let i = 0; i < qtdeJogador; i++){
    alert("Nome: " + nomes[i] + " - Posicao: " + posicoes[i]);
}