const filterButtons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.category-card');

console.log('Items:', items);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Filter button clicked');
    // Отримати тип фільтра з атрибута data-type
    let type = button.getAttribute('data-type');
    filterButtons.forEach((btn) => btn.classList.remove('active'));

    const items2 = document.querySelectorAll('.category-card');
    console.log(items2, 'items to filter');
    items2.forEach((item) => {
      // Порівняти тип фільтра з атрибутом data-category елемента
      console.log('item category=', item.getAttribute('data-category'), ' filter type=', type);
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
    if (btn.classList.contains('liked')) {
      btn.classList.remove('liked');
      document.cookie = 'liked-animal-' + index + '=; max age=0';
    } else {
      btn.classList.add('liked');
      document.cookie = 'liked-animal-' + index + '=true; max-age=31536000';
    }
  });
});

let liked_modal = document.getElementById('liked_reptiles').querySelector('.modal-body');
const cookies = document.cookie.split('; ');
cookies.forEach((cookie) => {
  let [name, value] = cookie.split('=');

  if (name.startsWith('liked-animal-') && value === 'true') {
    let index = parseInt(name.split('-')[2]);

    if (likeBtns[index]) {
      likeBtns[index].classList.add('liked');
      // додати в liked modal відповідну карточку по індексу ( додати cloneNode(true))
      liked_modal.appendChild(items[index].cloneNode(true));
    }
  }
});
