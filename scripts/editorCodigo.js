const colorBackground = document.querySelector('[data-color-background]');
const colorPicker = document.querySelector('[data-personalizar-cor]');

colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function updateFirst(event) {    
    colorBackground.style.background = event.target.value;
}

function watchColorPicker() {

    const colorBackgroundStyle = colorBackground.style;
    // const colorBackgroundTransform = colorBackgroundStyle.transform;

    colorBackgroundStyle.animation = 'pulse 2s alternate';

    // colorBackgroundStyle.transition = "transform 2s";
    // colorBackgroundStyle.transform = "scale(1.05)";

    console.log("funfa");
}