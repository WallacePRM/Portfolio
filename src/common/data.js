const getTheme = () => {

    const theme = localStorage.getItem('theme');
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (theme) return theme;
    if (prefersColorScheme) return 'dark';
};

const saveTheme = (theme) => {

    localStorage.setItem('theme', theme);
};

const getScrollPosition = () => {

    const scrollPosition = localStorage.getItem('last-scroll-position') || 0;
    return scrollPosition;
};

const saveScrollPosition = (position) => {

    localStorage.setItem('last-scroll-position', position);
};