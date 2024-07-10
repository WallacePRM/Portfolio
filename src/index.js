jQuery(() => {

    init();
    binds();

    $(window).on('resize', onResize).resize();
    $('.c-scroll-top').on('click', handleScrollTop);

    rippleEffect($('.c-app'));
    setGlareEffect();
    // if ($(window).width() > 768) setVanillaEffect();
    setVanillaEffect();
    setScrollPosition();
});

const init = () => {

    createNav();
    createGithubGraphics();
    createCarousel();
    createCloudsGroup();
    applyTheme();
};

const binds = () => {

    $('.c-app').on('scroll', setScrollTopVisibility);
    $('[name="btn_sidebar"]').on('click', handleOpenSidebar);
    $('.c-form').on('submit', handleSendEmail);
};

const onResize = () => {

    sidebarVisibilty();
    resetCarouselScreen();
};

const setScrollTopVisibility = () => {

    const scrollPosition = $('.c-app').scrollTop();
    const lastScrollPosition = getScrollPosition();

    if (scrollPosition > 100 && scrollPosition < lastScrollPosition) {
        $('.c-scroll-top').addClass('c-scroll-top--visible');
    }
    else {
        $('.c-scroll-top').removeClass('c-scroll-top--visible');
    }

    delay(() => saveScrollPosition(scrollPosition), 100);
};

const setScrollPosition = () => {

    const scrollPosition = getScrollPosition();
    $('.c-app').scrollTop(scrollPosition);
};

const switchTheme = () => {

    const isDark = $('body').is('.theme--dark');
    if (isDark) {

        $('body').removeClass('theme--dark');
        saveTheme('light');
    }
    else {

        $('body').addClass('theme--dark');
        saveTheme('dark');
    }

    createGithubGraphics();
    updateCarouselIitemImage();
};

const applyTheme = () => {

    const theme = getTheme();
    if (theme === 'dark') {
        $('body').addClass('theme--dark');
        $('.c-theme').addClass('c-theme--active');
    }
};

const createGithubGraphics = () => {

    const theme = getTheme();

    $('.c-github__graphics').html(`
        <img class="card-template c-github__graphics__item" height="180em" src="https://github-readme-stats.vercel.app/api?username=WallacePRM&show_icons=true&theme=${theme === 'dark' ? 'git_dark' : 'light'}&include_all_commits=true&count_private=true&hide_border=true&locale=pt-br&bg_color=ffffff00&text_color=${theme === 'dark' ? 'A9AAAF' : '222'}"/>
        <img class="card-template c-github__graphics__item" height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=WallacePRM&layout=compact&langs_count=7&theme=${theme === 'dark' ? 'git_dark' : 'light'}&hide_border=true&locale=pt-br&bg_color=ffffff00&text_color=${theme === 'dark' ? 'A9AAAF' : '222'}"/>
    `);
};

const createCloudsGroup = () => {

    let $cloud;

    for (let i = 1; i < 5; i++) {

        $cloud = $(`<div class="c-clouds-group__item c-clouds-group__item--${i}"></div>`);

        $cloud.append(`
            <svg class="c-clouds-group__item__img" width="128" height="77" viewBox="0 0 128 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M103 25C103 25.6733 102.973 26.3403 102.921 27.0001L103 27C116.807 27 128 38.1929 128 52C128 65.8071 116.807 77 103 77C102.327 77 101.66 76.9734 101 76.9212V77H20C8.9543 77 0 68.0457 0 57C0 45.9543 8.9543 37 20 37C22.0981 37 24.1207 37.3231 26.0209 37.9222C26.007 37.6165 26 37.3091 26 37C26 25.9543 34.9543 17 46 17C48.7785 17 51.4246 17.5666 53.8292 18.5905C56.6596 7.88886 66.4085 0 78 0C91.8071 0 103 11.1929 103 25Z" fill="white"/>
            </svg>
        `);

        for (let i = 1; i < 4; i++) {
            $cloud.append(`
                <svg class="c-rain__drop c-rain__drop--${i} width="50" height="75" viewBox="0 0 50 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="50" r="25" fill="#8FDBF3"/>
                    <path d="M25 0L46.6506 37.5H3.34937L25 0Z" fill="#8FDBF3"/>
                </svg>
            `);
        }

        $('.c-clouds-group').append($cloud);
    }
};

/* ========= HANDLES ========= */

const handleHideSidebar = () => {
    hideSidebar();
};

const handleOpenSidebar = () => {
    openSidebar();
};

const handleScrollTop = () => {
    $('.c-app').scrollTop(0);
}

const handleToggleSwitch = () => {

    const $switch = $('.c-theme');
    if ($switch.is('.c-theme--active')) $switch.removeClass('c-theme--active');
    else $switch.addClass('c-theme--active');

    switchTheme();
};

const handleSendEmail = async (e) => {

    e.preventDefault();

    const form = e.currentTarget;
    const $btn = $(form).find('[name="btn_send"]');

    $btn.find('.btn__icon').remove();
    $btn.append(`<i class="btn__icon fa-solid fa-spinner fa-spin-pulse"></i>`);
    $btn.attr('disabled', 'disabled');
    $btn.addClass('disabled');

    $(form).find(':input').attr('disabled', 'disabled');

    try {
        const config = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        await sendEmail(config);
        toastSuccess('E-mail enviado!');
    }
    catch(error) {

        console.error(error);

        toastError('Ops! Houve um imprevisto');
    }
    finally {
        $(form).find(':input').attr('disabled', null);
        $btn.find('.btn__icon').remove();
        $btn.append(`<i class="btn__icon fa-solid fa-arrow-right-from-bracket"></i>`);
        $btn.attr('disabled', null);
        $btn.removeClass('disabled');
    }
};