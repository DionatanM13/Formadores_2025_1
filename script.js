document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentar = document.getElementById("aumentar-fonte");
    let tamanhoFonte = 1;

    botaoAumentar.addEventListener('click', function(){
        tamanhoFonte += 0.1;
        document.body.style.fontSize = tamanhoFonte+'rem';
    })

    const botaoDiminuir = document.getElementById("diminuir-fonte");

    botaoDiminuir.addEventListener('click', function(){
        tamanhoFonte -= 0.1;
        document.body.style.fontSize = tamanhoFonte + 'rem';
    })

    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoAcessibilidade.addEventListener('click', function(){
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
    })

    const alternaContraste = document.getElementById('alterna-contraste')

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
})
})