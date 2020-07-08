import express from "express";
import http from "http";

const port = process.env.PORT || 8080;

const app = express();

const server = new http.Server(app);

// app.get("/", (req, res) => res.status(200).send("Hi from Node server!"));

app.get("/api/users/:userId", (req, res) =>
  res.status(200).send(req.params.userId)
);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

server.listen(port, () =>
  console.log(`server is listening to: http://localhost:${port}`)
);
