const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts');

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      console.table(allContacts);
      break;
    case 'get':
      const contact = await getContactById(id);
      console.table(contact);
      break;
    case 'add':
      const newContact = await addContact({ name, email, phone });
      console.table(newContact);
      break;
    case 'remove':
      const deleteContact = await removeContact(id);
      console.table(deleteContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
