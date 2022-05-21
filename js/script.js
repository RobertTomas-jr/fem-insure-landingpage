const closeBtn = document.querySelector('.menu-close');
const openBtn = document.querySelector('.menu-open');
const menu = document.querySelector('.menu');

openBtn.addEventListener('click', () => {
        menu.classList.add('show');
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
        menu.classList.remove('show');
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
})

