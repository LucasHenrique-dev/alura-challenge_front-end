(() => {
    const botao = document.querySelector('[data-salvar-button]');

    const botaoStyle = botao.style;

    let focusCont = 0;
    let wasPressed = false;

    botao.addEventListener('mouseover', () => {

        botaoStyle.transition = '400ms';
        
        botaoStyle.background = '#7BA4FC';
        
        botaoStyle.cursor = 'pointer';
    });
    
    botao.addEventListener('mouseout', () => {
        
        botaoStyle.transition = '600ms';
        
        botaoStyle.background = '#5081FB';
        
        if (botao.classList.contains('focus')) desativarFocus();
        if (wasPressed) botaoStyle.width = '50%';
        
        focusCont = 0;
    });
    
    botao.addEventListener('mousedown', () => {
        
        if (!botao.classList.contains('focus') && focusCont == 0) {
            botaoStyle.transition = '400ms';
            
            botaoStyle.background = '#7BA4FC';

            botaoStyle.boxShadow = '0 0 0 4px rgba(80, 129, 251, 0.72)';
            
            botao.classList.add('focus');
            
            focusCont++;
            wasPressed = true;
        }
    });
    
    botao.addEventListener('mouseup', () => {
        
        if (botao.classList.contains('focus')) desativarFocus();
    });

    function desativarFocus() {
        botaoStyle.transition = '400ms';

        botaoStyle.background = '#96B9FD';

        botaoStyle.boxShadow = '0 0 0 0px rgba(80, 129, 251, 0.72)';

        botaoStyle.cursor = 'default';

        botao.classList.remove('focus');
    }
})()