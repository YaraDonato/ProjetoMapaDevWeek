/* 
MANEIRA ERRADA

const homemDeFerro = document.getElementById('homem-de-ferro')

homemDeFerro.addEventListener('mouseenter', () => { 
    homemDeFerro.classList.add('selecionado')
})

const hulk = document.getElementById('hulk')

hulk.addEventListener('mouseenter', () => { 
    hulk.classList.add('selecionado')
})
*/

// MANEIRA CERTA, aqui voce esta adicionando e removendo do anterior
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

    

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        //nomeJogador1.innerHTML = 'batata'

        const nomeSelecionado =  personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    });
});

