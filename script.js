
    const tabLinks = document.querySelectorAll('.tab-link'); //Доступ до елементів сторінки
    const tabContents = document.querySelectorAll('.animal-block'); //Доступ до елементів сторінки

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            // Пройтись по кожному блоку вмісту
            // перевірити чи id === target
            // якщо так, додати клас active
            //інакше видалити клас active
        });
    });
