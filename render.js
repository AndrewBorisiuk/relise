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

async function renderCards(startIdx = 0, endIdx = 10) {
  try {
    let data = await fetch('data.json');
    data = await data.json();

    //в змінну Data зберігати лише частину масиву від startIdx до endIdx
    // метод slice

    data.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('category-card');
      card.setAttribute('data-category', item.category);

      card.innerHTML = renderCard(item);

      container.appendChild(card);
    });
  } catch (e) {
    console.error('Error fetching data:', e);
  }
}

renderCards();

let loadBtn = document.getElementById('load-more');
loadBtn.addEventListener('click', () => {
  const renderedCardsCount = document.querySelectorAll('.category-card').length;

  renderCards(renderedCardsCount, renderedCardsCount + 10);
});
