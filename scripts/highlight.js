(() => {
    const areaDoCodigo = document.querySelector('[data-code-area]');
    const linguagem = document.querySelector('[data-language-selection]');
    const botaoHighlight = document.querySelector('[data-highlight-button]');

    function mudaLinguagem() {
        
        const codigo = areaDoCodigo.querySelector('code');
        const conteudoCodigo = codigo.innerHTML;
        
        areaDoCodigo.innerHTML = `
        <div>
            <img src="/assets/Images/mac_buttons.svg" alt="Representação dos Botões de um terminal Mac">
        </div>
        <pre class="code-content" data-code-content>
            <code class="code-campo-codigo hljs ${linguagem.value}" contenteditable="true" aria-label="editor">${conteudoCodigo}</code>
        </pre>`;

        const paiCodigo = document.querySelector('[data-code-content]');
        const paiCodigoStyle = paiCodigo.style;

        areaDoCodigo.firstChild.innerText = codigo.innerText;
        paiCodigoStyle.overflow = "hidden";
    }

    linguagem.addEventListener('change', () => {
        mudaLinguagem();
    })

    botaoHighlight.addEventListener('click', () => {

        const codigo = areaDoCodigo.querySelector('code');
        const paiCodigo = codigo.parentElement;
        const paiCodigoStyle = paiCodigo.style;

        paiCodigoStyle.overflow = "hidden";

        hljs.highlightElement(codigo);
    });
})()