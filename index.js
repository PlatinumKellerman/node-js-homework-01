const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      console.table(allContacts);
      break;
    case 'get':
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case 'add':
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;
    case 'remove':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({
//   action: 'removeContact',
//   id: 'TQhCQh20M7RQWTL10Cm2-',
// });

// const actionIndex = process.argv.indexOf('--action');
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);
