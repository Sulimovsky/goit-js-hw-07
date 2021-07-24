const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onChangeInput);
const value = refs.spanEl.textContent;

function onChangeInput (event) {
    event.currentTarget.value === '' ? refs.spanEl.textContent = value : refs.spanEl.textContent = event.currentTarget.value;
}