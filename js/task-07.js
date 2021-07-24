const refs = {
    inputRangeEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.spanEl.style.fontSize = `${refs.inputRangeEl.value}px`;
refs.inputRangeEl.addEventListener('input', onChangeFontSizeEl);

function onChangeFontSizeEl () {
    refs.spanEl.style.fontSize = `${refs.inputRangeEl.value}px`;
};