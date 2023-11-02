const aboutButton = document.querySelector('.about_button');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.button_close');
const modalVrapper = document.querySelector('.modal_vrapper');

const state = {
    status: '',
};

const render = () => {
    console.log(state.status);
    // if (state.status === true) {
    //     modal.classList.remove('close');
    //     modal.classList.add('open');
    // } if (state.status === false) {
    //     modal.classList.remove('open');
    //     modal.classList.add('close');
    // }

    if (state.status === true) {
        modalVrapper.classList.remove('close');
        modalVrapper.classList.add('open');
    } if (state.status === false) {
        modalVrapper.classList.remove('open');
        modalVrapper.classList.add('close');
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