const program = require('commander');
const { prompt }= require('inquirer');
const { addContact , getContact }  = require('./index');

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter the firstname... '
    },
    {
        type: "input",
        name: "lastname",
        message: "Enter the lastaname... "
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter phone number... '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address... '
    }
];

program
    .version('0.0.1')
    .description('Contact management cli');

program
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(() => {
       prompt(questions).then(answers =>
        addContact(answers));
    });

program
    .command('getContact <name>')
    .alias('r')
    .description('Get contact')
    .action(name => getContact(name));

program.parse(process.argv);
