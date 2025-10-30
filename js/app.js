// Com essa função, eu seleciono um id do html com base no numero do jogo, coleto o status da classe atual dela e chamo as demais funções para alterar as figuras
function alterarStatus(gameN) {
    console.log("Função chamada para o jogo:", gameN);
    const item = document.getElementById(`game-${gameN}`);
    console.log(item);

    // Caso o id não seja identificado, ele ira retornar um erro.
    if (!item) return console.erro('Item não encontrado!');

    alterarImg(item);
    alterarBotao(item);

}

// Essa função altera o status da classe, com o toggle, eu falo que se ele já tiver certa classe ele ira retira-la caso contrario ele ira adiciona-la
function alterarImg(item) {
    const imgDiv = item.querySelector('.dashboard__item__img');
    imgDiv.classList.toggle('dashboard__item__img--rented');
    console.log(item);
}

// Já essa, funciona de maneira similar a primeria, porem alem de trocar a aparecendia do botão, ele troca tambem o texto
function alterarBotao(item) {
    const botao = item.querySelector('.dashboard__item__button');
    botao.classList.toggle('dashboard__item__button--return');

    botao.textContent = botao.textContent === 'Devolver' ? 'Alugar' : 'Devolver';
}
