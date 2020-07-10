"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = (app) => {
    app
        .route("/contact")
        .get((req, res, next) => {
        // middlewae
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
    }, (req, res, next) => {
        res.send("GET request was successful!");
    })
        .post((req, res) => {
        res.send(`POST request was successful! ${JSON.stringify(req.body)}`);
    });
    app
        .route("/contact/:contactId")
        .put((req, res) => res.send(`PUT request was successful for contact: ${req.params.contactId}!`))
        .delete((req, res) => res.send(`DELETE request was successful for contact: ${req.params.contactId}!`));
};
exports.default = routes;
//# sourceMappingURL=crmRoutes.js.map