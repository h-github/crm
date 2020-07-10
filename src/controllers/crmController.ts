import * as express from "express";
import * as mongoose from "mongoose";

import { ContactShema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactShema);

export const addNewContact = (req: express.Request, res: express.Response) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};

export const getContacts = (req: express.Request, res: express.Response) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};

export const getContactById = (req: express.Request, res: express.Response) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};
