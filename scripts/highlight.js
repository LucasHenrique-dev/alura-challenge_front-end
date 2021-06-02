const areaDocodigo = document.querySelector('[data-code-area]');
const linguagem = document.querySelector('[data-language-selection]');
const botaoHighlight = document.querySelector('[data-highlight-button]');

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code');
    areaDocodigo.innerHTML = `<code class="code-campo-codigo hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`;
    areaDocodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener('change', () => {
    mudaLinguagem();
})

botaoHighlight.addEventListener('click', () => {
    const codigo = areaDocodigo.querySelector('code');
    hljs.highlightBlock(codigo);
});