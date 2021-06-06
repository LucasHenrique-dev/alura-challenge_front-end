const inputs = document.querySelectorAll('[data-input-efeito]');

for (const input of inputs) {

    const inputStyle = input.style;

    input.addEventListener('blur', () => {
        inputStyle.cursor = 'pointer';
    });
    
    input.addEventListener('focus', () => {
        inputStyle.cursor = 'default';
    });
}
