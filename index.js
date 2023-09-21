import * as contactsService from "./contacts.js";

// // index.js
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

    //     case "add":
    //       // ... name email phone
    //       break;

    //     case "remove":
    //       // ... id
    //       break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list"});
// invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });
invokeAction({ action: "get", id: "438" });
