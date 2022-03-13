import * as express from "express";
import * as config from "config";

const app = express();

const PORT = config.get("port");

app.listen(PORT, () => {
  console.log(`Express is listening at http://localhost:${PORT}`);
});

// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
