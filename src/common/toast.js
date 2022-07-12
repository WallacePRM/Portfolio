
const toast = (msg, duration, type) => {

    Toastnotify.create({
        text: msg,
        duration: duration || 3000,
        type: type || 'default'
    });
};

const toastSuccess = (msg, duration) => {

    Toastnotify.create({
        text: `<i class="toastnotify-icon fa-regular fa-circle-check"></i> ${msg}`,
        duration: duration || 3000,
        type: 'success'
    });
};

const toastError = (msg, duration) => {

    Toastnotify.create({
        text: `<i class="toastnotify-icon fa-regular fa-circle-xmark"></i> ${msg}`,
        duration: duration || 5000,
        type: 'danger'
    });
};
