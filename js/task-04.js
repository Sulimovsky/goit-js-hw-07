const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = refs.value.textContent;

refs.increment.addEventListener('click', increment);
refs.decrement.addEventListener('click', decrement);

function increment () {
    +refs.value.textContent++;
}

function decrement () {
    refs.value.textContent--;
}



