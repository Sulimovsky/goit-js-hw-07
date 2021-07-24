const refs = {
    inputNumber: document.querySelector('[type="number"]'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

function createBoxes (amount) {
    let size = 20;
    let newArr = [];

    for (let i = 1; i <= amount; i += 1) {
        const randomColor = {
            red: Math.floor(Math.random() * (255 - 1) + 1),
            green: Math.floor(Math.random() * (255 - 1) + 1),
            blue: Math.floor(Math.random() * (255 - 1) + 1),
        };

        size += 10;

        newArr.push(`<div style="width: ${size}px; height: ${size}px; background-color: rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue});"></div>`);
    };

    refs.boxes.insertAdjacentHTML('beforeend', newArr.join(''));
};


refs.btnRender.addEventListener('click', () => {
    createBoxes(refs.inputNumber.value);
});
refs.btnDestroy.addEventListener('click', () => {
    refs.boxes.innerHTML = '';
    refs.inputNumber.value = '';
});

