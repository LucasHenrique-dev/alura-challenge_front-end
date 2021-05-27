const editorCodigoLabel = document.querySelector('[data-label-editor-codigo]');
const paragrafo = editorCodigoLabel.querySelector('[data-p-editor-codigo]');
const linkImg = editorCodigoLabel.querySelector('[data-img-editor-codigo]');

editorCodigoLabel.addEventListener("mouseover", () => {

    const paragrafoStyle = paragrafo.style;
    const linkImgStyle = linkImg.style;

    paragrafoStyle.transition = '1s';
    paragrafoStyle.opacity = 0.5;
    
    linkImgStyle.transition = '1s';
    linkImgStyle.backgroundColor = '#355DB6';

});

editorCodigoLabel.addEventListener("mouseout", () => {

    const paragrafoStyle = paragrafo.style;
    const linkImgStyle = linkImg.style;

    paragrafoStyle.transition = '1s';
    paragrafoStyle.opacity = 1;
    
    linkImgStyle.transition = '1s';
    linkImgStyle.backgroundColor = 'transparent';    
});