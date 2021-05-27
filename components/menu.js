const editorCodigoLabel = document.querySelector('[data-label-editor-codigo]');
const paragrafo = editorCodigoLabel.querySelector('[data-p-editor-codigo]');
const divImg = editorCodigoLabel.querySelector('[data-div-editor-codigo]');

paragrafo.addEventListener("mouseover", () => {
    
    const paragrafoStyle = paragrafo.style;

    const linkImgStyle = divImg.style;

    paragrafoStyle.cursor = "pointer";
    paragrafoStyle.transition = '1s';
    paragrafoStyle.opacity = 0.5;


    linkImgStyle.transition = '1s';
    linkImgStyle.backgroundColor = '#355DB6';
});

paragrafo.addEventListener("mouseout", () => {
    
    const paragrafoStyle = paragrafo.style;

    const linkImgStyle = divImg.style;

    paragrafoStyle.transition = '1s';
    paragrafoStyle.opacity = 1;


    linkImgStyle.transition = '1s';
    linkImgStyle.backgroundColor = 'transparent';
});

divImg.addEventListener("mouseover", () => {
    
    const divImgStyle = divImg.style;
    const linkImg = divImg.querySelector('[data-img-editor-codigo]');
    const linkImgStyle = linkImg.style;

    const paragrafoStyle = paragrafo.style;

    linkImgStyle.cursor = "pointer";

    divImgStyle.transition = '1s';
    divImgStyle.backgroundColor = '#355DB6';

    paragrafoStyle.opacity = 0.5;
});

divImg.addEventListener("mouseout", () => {
    
    const divImgStyle = divImg.style;

    const paragrafoStyle = paragrafo.style;

    divImgStyle.transition = '1s';
    divImgStyle.backgroundColor = 'transparent';

    paragrafoStyle.opacity = 1;
});
