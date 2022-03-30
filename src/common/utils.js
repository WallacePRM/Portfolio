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