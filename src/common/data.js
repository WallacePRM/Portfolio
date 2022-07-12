const getTheme = () => {

    return localStorage.getItem('theme');
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