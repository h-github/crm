import { Express } from "express-serve-static-core";

import {
  addNewContact,
  getContacts,
  getContactById,
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

    .post(addNewContact);

  app
    .route("/contacts/:contactId")
    .get((req, res) => getContactById(req, res))
    .put((req, res) =>
      res.send(
        `PUT request was successful for contact: ${req.params.contactId}!`
      )
    )

    .delete((req, res) =>
      res.send(
        `DELETE request was successful for contact: ${req.params.contactId}!`
      )
    );
};

export default routes;
