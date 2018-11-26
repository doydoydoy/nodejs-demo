var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@website.com',
        pass: 'your_password'
    }
});

var mailOptions = {
    from: 'your_email@website.com',
    to: 'your_receiver@website.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was ez'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});