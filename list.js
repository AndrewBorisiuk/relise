const filterButtons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.category-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Отримати тип фільтра з атрибута data-type

    items.forEach((item) => {
      // Порівняти тип фільтра з атрибутом data-category елемента
      if (true) {
        item.style.display = 'flex';
      } else {
        // Сховати елемент
      }
    });
  });
});
