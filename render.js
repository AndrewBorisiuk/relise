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

      card.innerHTML = renderCard(item);

      container.appendChild(card);
    });
  } catch (e) {
    console.error('Error fetching data:', e);
  }
}

renderCards();
