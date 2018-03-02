const program = require('commander');
const { addContact , getContact }  = require('./index');

program
    .version('0.0.1')
    .description('Contact management cli');

program
    .command('addContact <firstName> <lastName> <phone> <email>')
    .alias('a')
    .description('Add a contact')
    .action((firstName, lastName, phone, email) => {
       addContact({firstName,lastName, phone, email});
    });

program
    .command('getContact <name>')
    .alias('r')
    .description('Get contact')
    .action(name => getContact(name));

program.parse(process.argv);
