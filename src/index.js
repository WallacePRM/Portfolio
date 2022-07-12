jQuery(() => {

    init();
    binds();

    $(window).on('resize', onResize).resize();
    $('.c-scroll-top').on('click', handleScrollTop);

    rippleEffect($('.c-app'));
    setGlareEffect();
    if ($(window).width() > 768) setVanillaEffect();
});

const init = () => {

    $('.c-app').append(`
        <header class="c-header">
            <div class="c-header__info">
                <h1 class="c-header__title">Port<span class="highlight--text ml-10">fólio~</span></h1>
                <i name="btn_sidebar" class="c-sidebar-btn glare-effect fa-solid fa-bars"></i>
                <!-- Nav -->
            </div>
        </header>
        <main class="c-content">
            <section class="c-section c-section--presentation">
                <div class="c-container">
                    <img class="c-content__profile-img" src="assets/img/img.png" alt="Wallace PRM">
                    <div class="c-content__presentation-info">
                        <div class="c-connections">
                            <a class="c-connections__item" target="_blank" href="https://github.com/WallacePRM" rel="nofollow, noreferrer, noopener, external">
                                <i class="fa-brands fa-github" title="Página no Github"></i>
                            </a>
                        </div>
                        <h3>Olá, me chamo <span class="highlight--text">Wallace</span></h3>
                        <p class="mt-20 mb-30">Este é um portfólio que contém algumas informações sobre mim.</p>
                        <div class="c-content__buttons">
                            <a href="#contact" class="btn ripple-effect glare-effect m-5">
                                <i class="fa-regular fa-envelope mr-10"></i>
                                <span>Contacte-me</span>
                            </a>
                            <!--
                            <a class="btn btn--primary ripple-effect glare-effect m-5">
                                <i class="fa-solid fa-cloud-arrow-down mr-10"></i>
                                <span>Baixar resumo</span>
                            </a>
                            -->
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" class="c-section">
                <div class="c-container">
                    <div class="c-container__title">
                        <h2>Sobre <span class="highlight--text">Mim</span></h2>
                        <span class="text-light">Por quê me escolher?</span>
                        <div class="mt-20 mb-20 c--separator"></div>
                    </div>
                    <div class="c-container__content card-template card-3d-effect">
                        <div class="c-container__info">
                            <div class="c-container__item">
                                <h3 class="c-container__item__title">Quem sou eu?</h3>
                                <p>Me chamo Wallace Pires, sou de Governador Valadares / Minas Gerais.</p>
                            </div>
                            <div class="c-container__item">
                                <h3 class="c-container__item__title">Qual o meu nível de conhecimento?</h3>
                                <ul>
                                    <li><div class="b-green"></div>Conhecimento avançado em HTML, CSS, JAVASCRIPT e TYPESCRIPT.</li>
                                    <li><div class="b-red"></div>Conhecimento básico em frameworks. (REACT).</li>
                                    <li><div class="b-yellow"></div>Conhecimento intermediário em banco de dados. (POSTGRESQL)</li>
                                    <li><div class="b-red"></div>Conhecimento básico em Webpack.</li>
                                    <li><div class="b-red"></div>Conhecimento básico em NodeJS.</li>
                                    <li><div class="b-red"></div>Conhecimento básico em Git.</li>
                                </ul>
                            </div>
                            <div class="c-container__item">
                                <h3 class="c-container__item__title">Quais são os meus planos?</h3>
                                <p>Atualmente estou estudando sobre Frameworks, Design patterns e outros padrões na área de Back-end e Front-end. No futuro, pretendo aprender outras linguagens como C#.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="resume" class="c-section">
                <div class="c-container">
                    <div class="c-container__title">
                        <h2>Resu <span class="highlight--text">mo</span></h2>
                        <span class="text-light">Projetos recentes</span>
                        <div class="mt-20 mb-20 c--separator"></div>
                    </div>
                    <div class="c-container__content">
                        <div class="c-container__info p">
                            <div class="c-github">
                                <div class="c-github__skills">
                                    <img class="c-github__skills__item" alt="WPRM-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
                                    <img class="c-github__skills__item" alt="WPRM-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
                                    <img class="c-github__skills__item" alt="WPRM-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
                                    <img class="c-github__skills__item" alt="WPRM-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
                                    <img class="c-github__skills__item" alt="WPRM-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
                                </div>
                                <div class="c-github__graphics"></div>
                            </div>
                            <div class="c-carousel"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" class="c-section">
                <div class="c-container">
                    <div class="c-container__title">
                        <h2>Contacte<span class="highlight--text">-Me</span></h2>
                        <span class="text-light">Vamos manter contato</span>
                        <div class="mt-20 mb-20 c--separator"></div>
                    </div>
                    <div class="c-container__content">
                        <img class="c-container__img" src="assets/svg/platelet.svg"/>
                        <div class="flex  c-container__info p">
                            <form class="c-form">
                                <h3 class="text-medium">Entrar em contato</h3>
                                <div class="c-form__item">
                                    <i class="c-form__item__icon fa-regular fa-user"></i>
                                    <input class="c-form__item__input item-focus-effect" type="text" name="name" placeholder="Nome" required>
                                </div>
                                <div class="c-form__item">
                                    <i class="c-form__item__icon fa-regular fa-envelope"></i>
                                    <input class="c-form__item__input item-focus-effect" type="email" name="email" placeholder="E-mail" required>
                                </div>
                                <div class="c-form__item">
                                    <i class="c-form__item__icon fa-regular fa-message"></i>
                                    <input class="c-form__item__input item-focus-effect" type="text" name="subject" placeholder="Assunto" required>
                                </div>
                                <div class="c-form__item">
                                    <textarea name="message" class="c-form__item__textarea" placeholder="Mensagem" required></textarea>
                                </div>
                                <div class="c-form__item">
                                    <button class="btn btn--primary ripple-effect glare-effect" type="submit">
                                        <span class="mr-10">Enviar</span>
                                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer style="height: 400px; width: 100%; background: rgb(var(--primary-color))"></footer>
    `);

    createNav();
    createGithubGraphics();
    createCarousel();
    applyTheme();
};

const binds = () => {

    $('.c-app').on('scroll', setScrollTopVisibility);

    $('[name="btn_sidebar"]').on('click', handleOpenSidebar);

    $('.c-form .item-focus-effect').on('focusin', handleFocusEffect);
    $('.c-form .item-focus-effect').on('focusout', handleFocusEffect);
    $('.c-form').on('submit', handleSendEmail);
};

const onResize = () => {

    sidebarVisibilty();
    resetCarouselScreen();
};

const setScrollTopVisibility = () => {

    let lastScrollTop = parseInt(localStorage.getItem('last-scroll-position')) || 0;
    const st = $('.c-app').scrollTop();

    if (st > lastScrollTop) $('.c-scroll-top').addClass('c-scroll-top--visible');
    else $('.c-scroll-top').removeClass('c-scroll-top--visible');

    localStorage.setItem('last-scroll-position', st);
};

const switchTheme = () => {

    const isDark = $('body').is('.theme--dark');
    if (isDark) {

        $('body').removeClass('theme--dark');
        localStorage.setItem('theme', 'light');
    }
    else {

        $('body').addClass('theme--dark');
        localStorage.setItem('theme', 'dark');
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

const handleFocusEffect = (e) => {

    const $input = $(e.currentTarget);
    focusInputEffect($input);
};

const handleToggleSwitch = () => {

    const $switch = $('.c-theme');
    if ($switch.is('.c-theme--active')) $switch.removeClass('c-theme--active');
    else $switch.addClass('c-theme--active');

    switchTheme();
};

const handleSendEmail = async (e) => {

    e.preventDefault();
    const form = e.currentTarget;
    $(form).find(':input').attr('disabled', 'disabled');

    try {
        const config = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        await sendEmail(config);
    }
    catch(error) {

        console.error(error);
    }
    finally {
        $(form).find(':input').attr('disabled', null);
    }
};