import axios from 'axios';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    //verify recaptcha token
    const verifyRes = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        {},
        {
            params: {
                secret: process.env.RECAPTCHA_SECRET,
                response: req.body['g-recaptcha-response'],
            },
        },
    );

    if (!verifyRes.data.success) {
        res.status(400).json();
    }

    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
            ciphers: 'SSLv3',
        },
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailData = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: req.body.subject,
        text: `Message from callumbooth.dev \n\n From: ${req.body.email} \n\n Message: ${req.body.message}`,
        html: `<div>Message from callumbooth.dev <br /><br /> From: ${req.body.email} <br /><br /> Message: ${req.body.message}</div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });

    res.status(200).json();
}
