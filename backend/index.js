import express from "express";
import admin from "firebase-admin";
import { transactionsRouter } from "./transactions/routes.js";
// let users = [];

const app = express();
// app.use(json());

admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json"),
});

app.use("/transactions", transactionsRouter);

app.listen(3000, () =>
  console.log("API rest iniciada em http://localhost:3000")
);

// app.get("/login", (req, res) => {
//   if (users.length == 0) {
//   }
// });
