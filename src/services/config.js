const config = {
    urlApiEmail: "https://wprm-send-email.herokuapp.com/email", //isLocal() ? 'http://localhost:5010/email' :
};

function isLocal() {
    return location.origin.indexOf('localhost')  >= 0 || location.origin.indexOf('127.0.0.1')  >= 0;
}