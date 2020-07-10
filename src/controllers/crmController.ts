import * as mongoose from "mongoose";

import { ContactShema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactShema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};


export const getContactById = (req, res) => {
  Contact.findById({req.params.contactId}, (err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};