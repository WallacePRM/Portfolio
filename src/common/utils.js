const getTheme = () => {

    return localStorage.getItem('theme');
};

const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const convertRgbToHex = (color) => {

    let c = color.split(',', 3);
    return rgbToHex(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]));
};

const getScrollPosition = () => {

    const scrollPosition = localStorage.getItem('last-scroll-position') || 0;
    return scrollPosition;
};

const saveScrollPosition = (position) => {

    localStorage.setItem('last-scroll-position', position);
    console.log('oi')
};

const delay = (() => {

    let timer = 0;
    return (callback, ms) => {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
})();