(() => {
    const descricaoProjetos = document.querySelectorAll('[data-info-projeto]');
    
    
    
    for (const descricaoProjeto of descricaoProjetos) {
        
        const comment = descricaoProjeto.querySelector('[data-cartao-p-comment]');
        const like = descricaoProjeto.querySelector('[data-cartao-p-like]');
        const autor = descricaoProjeto.querySelector('.cartao-section-img');
        
        const descricaoProjetoStyle = descricaoProjeto.style;
        
        const commentContent = comment.innerHTML;
        const likeContent = like.innerHTML;
        
        const alturaPadrao = descricaoProjeto.offsetHeight;
        const autorHeight = autor.clientHeight;

        const commentCont = Math.round(Math.random()*100);
        const likeCont = Math.round(Math.random()*100);
        
        comment.innerHTML = commentContent + commentCont;
        like.innerHTML = likeContent + likeCont;
        
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