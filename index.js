const aboutButton = document.querySelector('.about_button');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.button_close');

const state = {
    status: '',
};

const render = () => {
    if (state.status === true) {
        modal.classList.remove('close');
        modal.classList.add('open');
    } if (state.status === false) {
        modal.classList.remove('open');
        modal.classList.add('close');
    }
};

aboutButton.addEventListener('click', (e) => {
    state.status = true;
    render();
});

buttonClose.addEventListener('click', () => {
    state.status = false;
    render();
});