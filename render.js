const container = document.querySelector('.animal-list');

function renderCard(item) {
  return `
       <div class="left">
            <h2>${item.title}</h2>
            <p>${item.description}</p>

            <div class="desc">
              ${item.fullDescription}
            </div>
            <div class="like"></div>
          </div>
          <a href="${item.pageUrl}" class="right">
            <img src="${item.imgUrl}" alt="" />
          </a>
          `;
}

async function renderCards() {
  try {
    let data = await fetch('data.json');
    data = await data.json();

    data.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('category-card');
      card.setAttribute('data-category', item.category);

      // В тебе картка поки пуста в змінній card, додаємо вміст card.innerHTML = ...
      // Вміст ми берем коли киликаємо функцію renderCard() і в неї передаємо item

      // container.appendChild(А вот тут має бути змінна в якій є код нашої картки);
    });
  } catch (e) {
    console.error('Error fetching data:', e);
  }
}

renderCards();
