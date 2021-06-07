(() => {
    const botao = document.querySelector('[data-highlight-button]');

    const botaoStyle = botao.style;

    let focusCont = 0;

    botao.addEventListener('mouseover', () => {

        botaoStyle.background = 'rgba(80, 129, 251, 0.16)';

        botaoStyle.cursor = 'pointer';
    });

    botao.addEventListener('mouseout', () => {

        if (botao.classList.contains('focus')) desativarFocus();

        botaoStyle.background = 'rgba(80, 129, 251, 0.08)';

        focusCont = 0;
    });

    botao.addEventListener('mousedown', () => {

        if (!botao.classList.contains('focus') && focusCont == 0) {
            botaoStyle.background = 'rgba(80, 129, 251, 0.16)';
        
            botaoStyle.border = '4px solid rgba(80, 129, 251, 0.24)';
        
            botao.classList.add('focus');

            focusCont++;
        }
    });

    botao.addEventListener('mouseup', () => {

        if (botao.classList.contains('focus')) desativarFocus();
    });

    function desativarFocus() {
        botaoStyle.background = 'rgba(80, 129, 251, 0.24)';

        botaoStyle.border = 'hidden';

        botaoStyle.cursor = 'default';

        botao.classList.remove('focus');
    }
})()