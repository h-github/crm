import { Express } from "express-serve-static-core";

const routes = (app: Express) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middlewae
      console.log(`Request from ${req.originalUrl}`);
      res.send("GET request was successful!");
    })

    .post((req, res) => res.send("POST request was successful!"));

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
