"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const crmRoutes_1 = require("./routes/crmRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
crmRoutes_1.default(app);
// app.get("/", (req, res) => res.status(200).send("Hi from NodeJs server!"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`server is listening to: http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map