const filterButtons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.category-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Отримати тип фільтра з атрибута data-type
    let type = button.getAttribute('data-type');

    items.forEach((item) => {
      // Порівняти тип фільтра з атрибутом data-category елемента
      if (item.getAttribute('data-category') === type || type === 'all') {
        item.style.display = 'flex';
      } else {
        // Сховати елемент
        item.style.display = 'none';
      }
    });
  });
});

const searchButtons = document.querySelectorAll('.search-form button');
const searchInputs = document.querySelectorAll('.search-form input');
