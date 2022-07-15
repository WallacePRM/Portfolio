
const sendEmail = async (emailConfig) => {

    const response = await fetch(config.urlApiEmail, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            from: 'wprm.postfolio@gmail.com',
            to: 'wprm4work@hotmail.com',
            subject: `Portfólio: ${emailConfig.subject}`,
            content: `<p>Olá, venho através do seu portfólio, meu nome é ${emailConfig.name} e este é meu e-mail (${emailConfig.email}). Pois bem, segue minha mensagem: ${emailConfig.message}</p>`
        })
    });

    if (!response.ok) {

        const error = await response.json();
        throw new Error(error.message)
    }
};