const mongoose = require('mongoose');
const assert = require('assert');

mongoose.Promise = global.Promise; // Allow native promises without throwing error
mongoose.connect('mongodb://localhost:27017/contact-manager');
const db = mongoose.connection;

function toLower(v) {
    return v.toLowerCase()
}

const contactSchema = mongoose.Schema({
    firstName: { type: String , set: toLower},
    lastName: { type: String , set: toLower},
    phone: { type: String , set: toLower},
    email: { type: String , set: toLower}
});

const Contact = mongoose.model('Contact',contactSchema);

const addContact = (contact) => {
    Contact.create(contact,(err) => {
        assert.equal(null,err);
        console.info('New contact added');
        db.close();
    });
};

const getContact = (name) =>{
    const search = new RegExp(name,'i');
    Contact.find({$or: [{firstName: search}, {lastName: search}]})
        .exec((err,contact) => {
            assert.equal(null,err);
            console.info(contact);
            console.info(`${contact.length} matches`);
            db.close();
    });
};


//Export methods
module.exports = { addContact , getContact };


