const createCarousel = () => {

    let theme = getTheme();
    if (theme === 'auto' || theme !== 'dark') {
        theme = 'light';
    }

    const listItems = [
        `<div class="c-carousel__item">
            <img class="c-carousel__item__img" src="assets/img/reprodutor_multimidia_${theme}.png">
            <div class="c-carousel__item__info">
                <div class="c-carousel__item__info__effect">
                    <h3 class="c-carousel__item__title">Reprodutor Multimídia</h3>
                    <p class="c-carousel__item__description">Projeto grande desenvolvido em React/Electron forge, onde o objetivo era estudar e aprender sobre reproduções de mídias.  </br> (Inspirado no Reprodutor Multimídia da Microsoft)</p>
                    <a target="__blank" href="https://github.com/WallacePRM/reprodutor_multimidia_desktop/releases" class="c-carousel__item__actions btn btn--primary glare-effect" rel="nofollow, noreferrer, noopener, external">Saiba mais</a>
                </div>
            </div>
        </div>`,
        `<div class="c-carousel__item">
            <img class="c-carousel__item__img" src="assets/img/midesp_${theme}.png">
            <div class="c-carousel__item__info">
                <div class="c-carousel__item__info__effect">
                    <h3 class="c-carousel__item__title">MiDesp</h3>
                    <p class="c-carousel__item__description">Projeto grande, onde o objetivo era criar um sistema de gerenciamento de gastos.</br> (Criação de conta indisponível para pessoas não autorizadas)</p>
                    <a target="__blank" href="https://midesp.com.br" class="c-carousel__item__actions btn btn--primary glare-effect" rel="nofollow, noreferrer, noopener, external">Saiba mais</a>
                </div>
            </div>
        </div>`,
        `<div class="c-carousel__item">
            <img class="c-carousel__item__img" src="assets/img/todo_${theme}.png">
            <div class="c-carousel__item__info">
                <div class="c-carousel__item__info__effect">
                    <h3 class="c-carousel__item__title">To Do</h3>
                    <p class="c-carousel__item__description">Projeto básico desenvolvido para uso próprio, onde objetivo era criar um sistema de To do simples com as funções básicas como: adicionar, editar e remover. </br> (Inspirado no To Do da Microsoft)</p>
                    <a target="__blank" href="https://wallaceprm.github.io/ToDo-App/" class="c-carousel__item__actions btn btn--primary glare-effect" rel="nofollow, noreferrer, noopener, external">Saiba mais</a>
                </div>
            </div>
        </div>`,
        `<div class="c-carousel__item">
            <img class="c-carousel__item__img" src="assets/img/webgame.png">
            <div class="c-carousel__item__info">
                <div class="c-carousel__item__info__effect">
                    <h3 class="c-carousel__item__title">Web Game</h3>
                    <p class="c-carousel__item__description">Projeto básico desenvolvido para uso próprio, onde o objetivo era estudar e aprender sobre a criação de jogos para navegadores.</p>
                    <a target="__blank" href="https://wallaceprm.github.io/web-game/" class="c-carousel__item__actions btn btn--primary glare-effect" rel="nofollow, noreferrer, noopener, external">Saiba mais</a>
                </div>
            </div>
        </div>`
    ];
    const itemsCount =  listItems.length;

    const $carousel = $(`
        <div class="c-carousel__screen card-template"></div>
    `);
    for (let i = 0; i < itemsCount; i++) {
        $carousel.append(listItems[i]);
    }

    const $carouselStep = $(`<div class="c-carousel-step"></div>`);
    for (let i = 0; i < itemsCount; i++) {

        const $step = $(`<div class="c-carousel-step__item" data-c-screen="${i + 1}"></div>`);
        $carouselStep.append($step);
    }
    $carouselStep.find('.c-carousel-step__item:first').addClass('c-carousel-step__item--active');

    const $carouselNav = $(`
        <div class="c-carousel__buttons">
            <button name="prev_c_button" class="c-carousel__button c-carousel__button--prev c-carousel__button--disabled">
                <i class="c-carousel__button__icon fa-solid fa-chevron-left"></i>
            </button>
            <button name="next_c_button" class="c-carousel__button c-carousel__button--next">
                <i class="c-carousel__button__icon fa-solid fa-chevron-right"></i>
            </button>
        </div>
    `);

    $carouselNav.find('[name="next_c_button"]').on('click', handleCarouselAction);
    $carouselNav.find('[name="prev_c_button"]').on('click', handleCarouselAction);
    $carouselStep.find('.c-carousel-step__item').on('click', handleSkipCarouselScreen);
    $carousel.find('.c-carousel__item').on({
        mouseenter: onCarouselHoverIn,
        mouseleave: onCarouselHoverOut
    });

    $carousel.append($carouselNav);
    $('.c-carousel').prepend($carousel);
    $('.c-carousel').append($carouselStep);
};

const resetCarouselScreen = () => {

    const item = $('.c-carousel__item')[0];
    $(item).css('margin-left', '0');
    $('.c-carousel__button').removeClass('c-carousel__button--disabled');
    $('[name="prev_c_button"]').addClass('c-carousel__button--disabled');

    saveCarouselStep(1)
    setCurrentCarouselStep(1);
};

const onCarouselHoverIn = (e) => {
    $(e.currentTarget).addClass('c-carousel__item--hovered');
};

const onCarouselHoverOut = (e) => {
    $(e.currentTarget).removeClass('c-carousel__item--hovered');
};

const setCurrentCarouselStep = () => {

    const step = getCarouselStep();
    $('.c-carousel-step__item').removeClass('c-carousel-step__item--active');
    $(`[data-c-screen="${step}"]`).addClass('c-carousel-step__item--active');
};

const saveCarouselStep = (index) => {
    localStorage.setItem('step', JSON.stringify(index));
};

const getCarouselStep = () => {
    const step = JSON.parse(localStorage.getItem('step'));
    return step !== null ? step : 1;
};

const saveCarouselStatus = (isDisabled) => {
    localStorage.setItem('c-status', JSON.stringify(isDisabled));
};

const getCarouselStatus = () => {
    const carouselDisabled = JSON.parse(localStorage.getItem('c-status'));
    return carouselDisabled !== null ? carouselDisabled : false;
};

const toggleCarouselActions = (action) => {

    const carouselWidth = $('.c-carousel').width() + 20;
    const item = $('.c-carousel__screen').children(":first");
    const itemsCount = $('.c-carousel__item').toArray().length;
    let margin = parseInt($(item).css('margin-left'));

    if (action === 'prev') {
        margin = carouselWidth - (margin * -1);

        if (margin + carouselWidth >= carouselWidth) {
            $('[name="prev_c_button"]').addClass('c-carousel__button--disabled');
            $('[name="next_c_button"]').removeClass('c-carousel__button--disabled');
        }
        else  {
            $('[name="prev_c_button"]').removeClass('c-carousel__button--disabled');
            $('[name="next_c_button"]').removeClass('c-carousel__button--disabled');
        }
    }

    if (action === 'next') {
        margin = carouselWidth + (margin * -1);

        if (margin >= (carouselWidth * (itemsCount - 1))) {
            $('[name="next_c_button"]').addClass('c-carousel__button--disabled');
            $('[name="prev_c_button"]').removeClass('c-carousel__button--disabled');
        }
        else  {
            $('[name="next_c_button"]').removeClass('c-carousel__button--disabled');
            $('[name="prev_c_button"]').removeClass('c-carousel__button--disabled');
        }
    }
};

const updateCarouselIitemImage = () => {

    const isDark = $('body').is('.theme--dark');
    const items = $('.c-carousel__item');
    for (let i = 0; i < items.length; i++) {

        let path = $(items[i]).find('.c-carousel__item__img').attr('src');
        if (isDark) {

            path = path.replace('_light', '_dark');
        }
        else {
            path = path.replace('_dark', '_light');
        }

        $(items[i]).find('.c-carousel__item__img').attr('src', path);
    }
};

// HANDLES

const handleCarouselAction = (e) => {

    if (getCarouselStatus()) return;
    saveCarouselStatus(true);

    const $btn = $(e.currentTarget);
    const carouselWidth = $('.c-carousel').width() + 20;
    const item = $('.c-carousel__item')[0];
    const currentStep = getCarouselStep();
    let margin = parseInt($(item).css('margin-left'));

    if ($btn.is('[name="prev_c_button"]')) {
        // PREV BUTTON
        margin = carouselWidth - (margin * -1);

        // Ativar/Desativar botões do carrossel
        toggleCarouselActions('prev');

        // Alterar tela ativa
        if (margin > 0) {
            $(item).css('margin-left', `-${carouselWidth * ($('.c-carousel__item').toArray().length - 1)}px`);
        }
        else {
            $(item).css('margin-left', `${margin}px`);
        }

        saveCarouselStep(currentStep - 1);
    }
    else {
        // NEXT BUTTON
        margin = carouselWidth + (margin * -1);

        // Ativar/Desativar botões do carrossel
        toggleCarouselActions('next');

        // Alterar tela ativa
        if (margin >= (carouselWidth * $('.c-carousel__item').toArray().length)) {
            $(item).css('margin-left', '0px');
        }
        else {
            $(item).css('margin-left', `-${margin}px`);
        }

        saveCarouselStep(currentStep + 1);
    }

    setCurrentCarouselStep();
    setTimeout(() => saveCarouselStatus(false), 400);
};

const handleSkipCarouselScreen = (e) => {

    const lastStep = parseInt($('.c-carousel-step__item--active').attr('data-c-screen'));
    $('.c-carousel-step__item').removeClass('c-carousel-step__item--active');

    const $btn = $(e.currentTarget);
    const step = parseInt($btn.attr('data-c-screen'));
    const width = $('.c-carousel').width() + 20;
    const item = $('.c-carousel__screen').children(":first");

    $(item).css('margin-left', `-${width * (step - 1)}px`);
    $btn.addClass('c-carousel-step__item--active');

    saveCarouselStep(step);

    setTimeout(() => {
        if (step !== lastStep) toggleCarouselActions(step > lastStep ? 'next' : 'prev');
    }, 200);

};