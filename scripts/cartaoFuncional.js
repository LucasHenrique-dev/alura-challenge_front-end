(() => {
    const descricaoProjetos = document.querySelectorAll('.info-projeto');

    for (const descricaoProjeto of descricaoProjetos) {
        const autor = document.querySelector('.cartao-section-img');

        const descricaoProjetoStyle = descricaoProjeto.style;

        const alturaPadrao = descricaoProjeto.offsetHeight;
        const autorHeight = autor.clientHeight;

        descricaoProjetoStyle.height = autorHeight + 'px';

        descricaoProjeto.addEventListener('mouseover', () => {

            descricaoProjetoStyle.transition = '920ms';
            descricaoProjetoStyle.height = alturaPadrao - 48 + 'px';
        });

        descricaoProjeto.addEventListener('mouseout', () => {
            descricaoProjetoStyle.height = autorHeight + 'px';
        });
    }
})()