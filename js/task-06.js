const inputEl = document.querySelector('#validation-input');

const dataValue = inputEl.dataset.length;

inputEl.addEventListener('blur', validationInput);

function validationInput (event) {
    inputEl.classList.add('invalid');

    if (+dataValue <= event.currentTarget.value.length) {
        inputEl.classList.replace('invalid', 'valid');
    }
};