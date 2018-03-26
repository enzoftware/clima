import { initializeApp } from 'firebase';

const app = {
    apiKey: "AIzaSyDRqKA7DxIc4kSlQ_Ir36GbpTgZaJ6huBo",
    authDomain: "enzoftware-kontakty.firebaseapp.com",
    databaseURL: "https://enzoftware-kontakty.firebaseio.com",
    projectId: "enzoftware-kontakty",
    storageBucket: "",
    messagingSenderId: "587833502104"
};

const db = app.database();
const contact = db.ref('contactos');

function addContact(){


}

function getContact(){
    
}