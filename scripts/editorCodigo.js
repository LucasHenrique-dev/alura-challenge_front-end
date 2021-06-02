(() => {
    const colorBackground = document.querySelector('[data-color-background]');
    const colorPicker = document.querySelector('[data-personalizar-cor]');

    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", watchColorPicker, false);

    function updateFirst(event) {    
        colorBackground.style.background = event.target.value;
    }

    function watchColorPicker() {

        const colorBackgroundStyle = colorBackground.style;

        colorBackgroundStyle.animation = "pulse 2s infinite";

        setTimeout(() => colorBackgroundStyle.animation = "", 1000);
    }
})()