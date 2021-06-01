(() => {
    const labels = document.querySelectorAll('[data-label-menu]');

    for (const label of labels) {
        
        const paragrafo = label.querySelector('.button-text');
        const paragrafoStyle = paragrafo.style;
        const divImg = label.querySelector('.img-menu');
        const divImgStyle = divImg.style;

        paragrafo.addEventListener("mouseover", () => {

            if (window.location.pathname === '/comunidade.html') {
                if (label.getAttribute('class') === 'label-editor-codigo') {
                    efeitoParagrafoAtivar(paragrafoStyle, divImgStyle);
                    paragrafo.addEventListener("click", () => {
                        window.location.href = 'index.html';
                    });
                }
            } else {
                if (label.getAttribute('class') === 'label-comunidade') {
                    efeitoParagrafoAtivar(paragrafoStyle, divImgStyle);
                    paragrafo.addEventListener("click", () => {
                        window.location.href = 'comunidade.html';
                    });
                }
            }
        });

        paragrafo.addEventListener("mouseout", () => {
            
            desativarEfeitos(label, paragrafoStyle, divImgStyle);
        });

        divImg.addEventListener("mouseover", () => {
            
            const ImgLink = divImg.querySelector('[data-img-menu]');
            const ImgLinkStyle = ImgLink.style;

            if (window.location.pathname === '/comunidade.html') {
                
                if (label.getAttribute('class') === 'label-editor-codigo') {
                    efeitoLinkAtivar(ImgLinkStyle, paragrafoStyle, divImgStyle);
                } else {
                    label.querySelector('.menu-link').onclick = function () {return false};
                }
            } else {
                if (label.getAttribute('class') === 'label-comunidade') {
                    efeitoLinkAtivar(ImgLinkStyle, paragrafoStyle, divImgStyle);
                } else {
                    label.querySelector('.menu-link').onclick = function () {return false};
                }
            }
        });

        divImg.addEventListener("mouseout", () => {

            desativarEfeitos(label, paragrafoStyle, divImgStyle);
        });
    }

    function efeitoParagrafoAtivar(paragrafoStyle, divImgStyle) {
        paragrafoStyle.transition = '1s';
        paragrafoStyle.cursor = 'pointer';
        paragrafoStyle.opacity = 0.5;

        divImgStyle.transition = '1s';
        divImgStyle.backgroundColor = '#355DB6';
    }

    function efeitoDesativar(paragrafoStyle, divImgStyle) {
        paragrafoStyle.transition = '1s';
        paragrafoStyle.opacity = 1;

        divImgStyle.transition = '1s';
        divImgStyle.backgroundColor = 'transparent';
    }

    function desativarEfeitos(label, paragrafoStyle, divImgStyle) {
        if (window.location.pathname === '/comunidade.html') {
            if (label.getAttribute('class') === 'label-editor-codigo') {
                efeitoDesativar(paragrafoStyle, divImgStyle);
            }
        } else {
            if (label.getAttribute('class') === 'label-comunidade') {
                efeitoDesativar(paragrafoStyle, divImgStyle);
            }
        }
    }

    function efeitoLinkAtivar(ImgLinkStyle, paragrafoStyle, divImgStyle) {
        ImgLinkStyle.cursor = 'pointer';

        paragrafoStyle.transition = '1s';
        paragrafoStyle.opacity = 0.5;

        divImgStyle.transition = '1s';
        divImgStyle.backgroundColor = '#355DB6';
    }
})()