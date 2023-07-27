const btnMore = document.querySelector('.button-area__more');
const btns = document.querySelectorAll('.button-area');
const btnArea = document.querySelector('.footer__button-area')
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const activeEvent = [btnArea, overlay];


btnMore.addEventListener('click', () => {

    body.classList.toggle('suppress-scroll')
    btns.forEach(btn => btn.classList.toggle('open'));
    activeEvent.forEach(btn => btn.classList.toggle('open'));

});
