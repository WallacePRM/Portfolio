const config = {
    urlApiEmail: "https://send-email-api.fly.dev" //"https://wprm-send-email.herokuapp.com/email"
};

function isLocal() {
    return location.origin.indexOf('localhost')  >= 0 || location.origin.indexOf('127.0.0.1')  >= 0;
}