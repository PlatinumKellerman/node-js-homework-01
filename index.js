const { listContacts } = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'listContacts':
      const allContacts = await listContacts();
      console.log(allContacts);
      break;
    default:
      console.log('Unknowa action');
  }
};

invokeAction({ action: 'listContacts' });
