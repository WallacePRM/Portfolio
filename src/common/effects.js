const rippleEffect = ($page) => {

    const buttons = $page.find('.ripple-effect').toArray();
    for (let i = 0; i < buttons.length; i++) {

        $(buttons[i]).on('click', (e) => {
            // const xAxis = e.clientX - e.target.offsetLeft;
            // const yAxis = e.clientY - e.target.offsetTop;

            // const span = $(`<span class="ripple" style="left: ${xAxis}; top: ${yAxis}"></span>`);
            const span = $(`<span class="ripple"></span>`);
            $(buttons[i]).append(span);
            setTimeout(() => span.remove(), 700)
        });
    }
};

const setVanillaEffect = () => {

    const cards = $('.card-3d-effect').toArray();
    for (let i = 0; i < cards.length; i++) {
        VanillaTilt.init($(cards[i])[0], {
            reverse:                false,  // reverse the tilt direction
            max:                    15,     // max tilt rotation (degrees)
            startX:                 0,      // the starting tilt on the X axis, in degrees.
            startY:                 0,      // the starting tilt on the Y axis, in degrees.
            perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:                  300,    // Speed of the enter/exit transition
            transition:             true,   // Set a transition on enter/exit.
            axis:                   null,   // What axis should be disabled. Can be X or Y.
            reset:                  true,   // If the tilt effect has to be reset on exit.
            easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            glare:                  true,  // if it should have a "glare" effect
            "max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
            "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                            // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
            "mouse-event-element":  null,   // css-selector or link to an HTML-element that will be listening to mouse events
            "full-page-listening":  false,  // If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
            gyroscope:              true,   // Boolean to enable/disable device orientation detection,
            gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
            gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
            gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
            gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
            gyroscopeSamples:       10
        });
    }

    console.log('VanillaTilt applied!');
};

const setGlareEffect = () => {

    const buttons = $('.glare-effect').toArray();
    for (let i = 0; i < buttons.length; i++) {
        VanillaTilt.init($(buttons[i])[0], {
            max: 0,
            speed: 0,
            glare: true,
            perspective: 0,
            "max-glare": .5,
        });
    }
};

const focusInputEffect = (input) => {

    const $parent = $(input).parent();
    if ($parent.is('.focus-effect')) {
        $parent.removeClass('focus-effect--active');
        setTimeout(() => $parent.removeClass('focus-effect'), 300);
    }
    else {
        $parent.addClass('focus-effect');
        setTimeout(() => $parent.addClass('focus-effect--active'), 0);
    }
};