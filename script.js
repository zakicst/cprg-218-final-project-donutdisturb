document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const activeHeader = document.querySelector('.accordion-header.active');

        if (activeHeader && activeHeader !== this) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.display = 'none';
        }

        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (this.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});