"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const crmRoutes_1 = require("./routes/crmRoutes");
const PORT = process.env.PORT || 4000;
const app = express();
crmRoutes_1.default(app);
app.get("/", (req, res) => res.status(200).send("Hi from NodeJs server!"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => console.log(`server is listening to: http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map