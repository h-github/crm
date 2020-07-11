import { Express } from "express-serve-static-core";

import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app: Express) => {
  app
    .route("/contacts")
    .get((req, res, next) => {
      // middlewae
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getContacts)

    // Post endpoint
    .post(addNewContact);

  app
    .route("/contacts/:contactId")
    // Get specific contact
    .get((req, res) => getContactById(req, res))

    // Updating a specific contact
    .put(updateContact)

    // deleting a specific contact
    .delete(deleteContact);
};

export default routes;
