var mailer = require('nodemailer');
var chalk = require('chalk');


if (!process.argv[2] || !process.argv[3]) {
    console.log(chalk.red('username and password need to be passed as argument!'));
    return;
}


var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.argv[2],
        pass: process.argv[3]
    }
});


var options = {
    from: process.argv[2],
    to: process.argv[2],
    subject: 'My first email via node js',
    text: 'Amazing stuff'
};

transporter.sendMail(options, function (error, info) {

    if (error) {
        console.log(error);
        return;
    }

    console.log(info.response);
});
