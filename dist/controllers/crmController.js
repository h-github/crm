"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewContact = void 0;
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model("Contact", crmModel_1.ContactShema);
exports.addNewContact = (req, res) => {
    console.log(req.body);
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.status(404).send(err);
        }
        res.json(contact);
    });
};
//# sourceMappingURL=crmController.js.map