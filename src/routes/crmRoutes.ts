import { Express } from "express-serve-static-core";

import { addNewContact, getContacts } from "../controllers/crmController";

const routes = (app: Express) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middlewae
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getContacts)

    .post(addNewContact);

  app
    .route("/contact/:contactId")
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
