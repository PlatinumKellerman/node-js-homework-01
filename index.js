const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'listContacts':
      const allContacts = await listContacts();
      console.log(allContacts);
      break;
    case 'getContactById':
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case 'addContact':
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;
    case 'removeContact':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.log('Unknown action');
  }
};

invokeAction({
  action: 'removeContact',
  id: 'TQhCQh20M7RQWTL10Cm2-',
});
