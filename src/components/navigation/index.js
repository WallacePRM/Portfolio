
const createNav = () => {

    if ($(window).width() <= 1000) {

        if ($('.c-sidebar').length > 0) return;
        $('.c-nav').remove();

        const $sidebar = $(`
            <div class="c-sidebar">
                <nav class="c-sidebar__nav">
                    <a href="#about" class="c-sidebar__item">Sobre</a>
                    <a href="#resume" class="c-sidebar__item">Projetos</a>
                    <a href="#contact" class="c-sidebar__item">Contato</a>
                </nav>
                <div class="c-sidebar__footer">
                    <div class="c-theme border">
                        <i class="c-theme--light fa-regular fa-sun"></i>
                        <i class="c-theme--dark fa-regular fa-moon"></i>
                    </div>
                </div>
            </div>
        `);

        $sidebar.on('click', e => e.stopPropagation());
        $sidebar.find('.c-sidebar__item').on('click', handleHideSidebar);
        $('.c-background').on('click', handleHideSidebar);

        $('body').append($sidebar);
    }
    else {
        if ($('.c-nav').length > 0) return;

        $('.c-sidebar').remove();
        $('.c-background').removeClass('c-background--active').off('click', handleHideSidebar);

        $('.c-header__info').append(`
            <nav class="c-nav">
                <a href="#about" class="c-nav__item ripple-effect">Sobre</a>
                <a href="#resume" class="c-nav__item ripple-effect">Projetos</a>
                <a href="#contact" class="c-nav__item ripple-effect">contato</a>
                <div class="c-theme">
                    <i class="c-theme--light fa-regular fa-sun"></i>
                    <i class="c-theme--dark fa-regular fa-moon"></i>
                </div>
            </nav>
        `);
    }

    $('.c-theme').on('click', handleToggleSwitch);

    applyTheme();
};

const sidebarVisibilty = () => {

    createNav();

    const sidebar = $('.c-sidebar');
    if ($(window).width() > 1000 && sidebar.is('.c-sidebar--open')) {

        hideSidebar();
    }
};

const hideSidebar = () => {

    $('.c-sidebar').removeClass('c-sidebar--open');
    $('.c-background').removeClass('c-background--active');

    $('.c-background').off('click', handleHideSidebar);
};

const openSidebar = () => {

    $('.c-sidebar').addClass('c-sidebar--open');
    $('.c-background').addClass('c-background--active');

    setTimeout(() => $('.c-background').on('click', handleHideSidebar), 0);
};