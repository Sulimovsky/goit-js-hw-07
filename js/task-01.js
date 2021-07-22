const ulCategoriesEl = document.querySelector('#categories');
const titleEl = document.querySelectorAll('h2');

console.log(`В списке ${ulCategoriesEl.children.length} категории.`);

titleEl.forEach(elem => console.log(`Категория: ${elem.textContent}
Количество элементов: ${elem.parentNode.querySelectorAll('li').length}`));





