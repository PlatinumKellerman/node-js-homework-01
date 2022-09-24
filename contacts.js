const fs = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');
const contactsPath = path.join(__dirname, '/db/contacts.json');
const updateContacts = async contacts => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  return contacts.find(item => item.id === contactId) || null;
};

const addContact = async data => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  updateContacts(contacts);
  return newContact;
};

const removeContact = async contactId => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  updateContacts(contacts);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
