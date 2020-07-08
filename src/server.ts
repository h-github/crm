import * as express from "express";
import routes from "./routes/crmRoutes";

const PORT = process.env.PORT || 4000;

const app = express();

routes(app);

app.get("/", (req, res) => res.status(200).send("Hi from NodeJs server!"));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () =>
  console.log(`server is listening to: http://localhost:${PORT}`)
);
