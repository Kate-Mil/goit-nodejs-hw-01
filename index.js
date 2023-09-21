import * as contactsService from "./contacts.js";

// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contactsService.listContacts();
      console.log(contactList);
      break;

    case "get":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contactsService.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list"});
// invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });
// invokeAction({ action: "get", id: "438" });
// invokeAction({
//   action: "add",
//   name: "Kate Mil",
//   email: "qwertyt@utquamvel.net",
//   phone: "(092) 802-8970",
// });
invokeAction({
  action: "remove",
  id: "QrfDxil_ECbGgdHEMCnpC",
});
