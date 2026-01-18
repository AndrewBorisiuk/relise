const filterButtons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.category-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Отримати тип фільтра з атрибута data-type
    let type = button.getAttribute('data-type');
    filterButtons.forEach((btn) => btn.classList.remove('active'));
   
    items.forEach((item) => {
      // Порівняти тип фільтра з атрибутом data-category елемента
      if (item.getAttribute('data-category') === type || type === 'all') {
        item.style.display = 'flex';
         button.classList.add('active');
      } else {
        // Сховати елемент
        item.style.display = 'none';
      }
    });
  });
});

const searchForm = document.querySelector('.search-form');
const searchButtons = document.querySelector('.search-form button');
const searchInputs = document.querySelector('.search-form input');

// Коли користувач натискає кнопку пошуку
// Маємо отримати значення з поля вводу
// Перевірити у всіз карточок чи містить їх текст це значення
// Якщо містить - показати карточку
// Якщо не містить - сховати карточку

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = searchInputs.value.toLowerCase();

  items.forEach((item) => {
    let title = item.querySelector('h2').textContent.toLowerCase();
    let text = item.querySelector('p').textContent.toLowerCase();
    let details = item.querySelector('.desc').textContent.toLowerCase();

    if (title.includes(query) || text.includes(query) || details.includes(query)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }

    console.log('title=', title);
  });
});

const likeBtns = document.querySelectorAll('.like');

likeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    if(btn.classList.contains('liked')) {
      // Відмінити лайк
      // Видалити клас liked
      // Видалити кукі
    }else{
      // Поставити лайк
      // Додати клас liked
      // Додати кукі
    }
  });
});

const cookies = document.cookie.split('; ');
cookies.forEach((cookie) => {
  let [name, value] = cookie.split('=');

  if (name.startsWith('liked-animal-') && value === 'true') {
    let index = parseInt(name.split('-')[2]);

    //Первірити чи існує кнопка лайк з таким індексом
    //Якщо існує, додати їй клас liked
  }
});