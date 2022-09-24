const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, '/db/contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  // console.log(JSON.parse(data));
  return JSON.parse(data);
};

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
};
