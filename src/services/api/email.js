
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
            content: `<p>${emailConfig.name} (${emailConfig.email}), ${emailConfig.message}</p>`
        })
    });

    if (!response.ok) {

        const error = await response.json();
        throw new Error(error.message)
    }
};