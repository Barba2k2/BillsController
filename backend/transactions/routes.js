import express from "express";
import admin from "firebase-admin";
import { authenticateToken } from "../middlewares/authenticate-jwt.js";
import { TransactionController } from "../transactions/controller.js";

const app = express();

const transactionController = new TransactionController();

app.get(
  "/",
  (request, response, next) =>
    authenticateToken(request, response, next, admin.auth()),
  (request, response) => transactionController.findByUser(request, response)
);

app.get("/:uid", (request, response, next) =>
  authenticateToken(
    request,
    response,
    next,
    admin.auth(),
    (request, response) => transactionController.findByUid(request, response)
  )
);

export const transactionsRouter = app;
