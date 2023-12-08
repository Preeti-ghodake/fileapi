const nodeMailer = require('nodemailer')

const mailConfig = async (to, sub, content) => {
    try {
        // mail config
        const transporter = await nodeMailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: process.env.PORT,
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASS
            }
        })

        // transport mail
        let info = await transporter.sendMail({
            from: process.env.MAIL_ID,
            to,
            subject: sub,
            html: `${content} `
        })

        return info;

    } catch (err) {
        return err
    }
}

module.exports = mailConfig