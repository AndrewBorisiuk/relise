
    const tabLinks = document.querySelectorAll('.tab-link'); //Доступ до елементів сторінки
    const tabContents = document.querySelectorAll('.animal-block'); //Доступ до елементів сторінки

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            tabContents.forEach(content => {
                if(content.id===target){
                    content.classList.add("active")
                }
                else{
                    content.classList.remove("active")
                }
            });
            // Пройтись по кожному блоку вмісту
            // перевірити чи id === target
            // якщо так, додати клас active
            //інакше видалити клас active
        });
    });

    let hero = document.querySelector(".main-image");
  
anime({
    targets: [hero],
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutQuad',
    duration: 5000,
    delay: anime.stagger(200),
  });