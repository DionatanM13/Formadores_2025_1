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
})