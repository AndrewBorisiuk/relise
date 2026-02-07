const tabLinks = document.querySelectorAll('.tab-link'); //Доступ до елементів сторінки
const tabContents = document.querySelectorAll('.animal-block'); //Доступ до елементів сторінки

tabLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const target = this.getAttribute('data-target');
    tabContents.forEach((content) => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    // Пройтись по кожному блоку вмісту
    // перевірити чи id === target
    // якщо так, додати клас active
    //інакше видалити клас active
  });
});

let hero = document.querySelector('.main-image');

anime({
  targets: [hero],
  opacity: [0, 1],
  translateY: [20, 0],
  easing: 'easeOutQuad',
  duration: 5000,
  delay: anime.stagger(200),
});

//Перевірка чи є імя в кукі файлі

let savedName = '';
let isCookieSaved = false;
let cookiesList = document.cookie.split('; ');

console.log(document.cookie, 'document.cookie');
for (let i = 0; i < cookiesList.length; i++) {
  let name_and_value = cookiesList[i].split('=');
  if (name_and_value[0] == 'user-name') {
    isCookieSaved = true;
    savedName = name_and_value[1];
  }
}
if (isCookieSaved) {
  alert('Вітаємо знову, ' + decodeURIComponent(savedName) + '!');
} else {
  let name = prompt('Скажіть нам ваше імя!');
  document.cookie = `user-name=${name} ;max-age=100000000`;
}

let typing = document.querySelector('.typing');

let text = 'вітаємо вас дорогі читачі';

for (let i = 0; i < text.length; i++) {
  setTimeout(function () {
    typing.innerHTML += text[i];
  }, 100 * i);
}

let paragraph = document.querySelector('.paragraph');

let text2 =
  'Тут ви зможете знайти різні цікаві факти про рептилій.Світ рептилій з Андрієм Борисюком Зануртеся у захоплюючий світ холоднокровних! Тут ви зможете знайти різні цікаві факти про рептилій, їхній спосіб життя та унікальні особливості. Досліджуйте, дивуйтесь та дізнавайтесь нове!';

for (let i = 0; i < text2.length; i++) {
  setTimeout(function () {
    paragraph.innerHTML += text2[i];
  }, 100 * i);
}
