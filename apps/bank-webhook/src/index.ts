import express, { Request, Response } from "express";

const app = express();

app.post("/hdfcWebhook", (req:Request, res:Response) => {
    //TODO: Add zod validation here?
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    // Update balance in db, add txn
    // Send success response to HDFC
    res.status(200).json({ status: "success" });	
})