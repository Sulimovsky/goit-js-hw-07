const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulEl = document.querySelector('#ingredients');

function createElement (element) {
    return element.map(el => {
        const liEl = document.createElement('li'); 
        liEl.textContent = el;

        return liEl;
    });
};

const result = createElement(ingredients);
ulEl.append(...result);