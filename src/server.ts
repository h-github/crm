import * as express from "express";
import routes from "./routes/crmRoutes";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose connection
(<any>mongoose).Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => res.status(200).send("Hi from NodeJs server!"));

app.listen(PORT, () =>
  console.log(`server is listening to: http://localhost:${PORT}`)
);
