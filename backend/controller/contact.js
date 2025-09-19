const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const express = require("express");
const sendMail = require("../utils/sendMail");
const router = express.Router();

// create contact us route
router.post(
    "/contact-us",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const {firstname, lastname, phonenumber, email, subject, message } = req.body;
            await sendMail({
                firstname,
                lastname,
                phonenumber,
                email,
                subject,
                message
            });
            res.status(201).json({
                success:true,
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

module.exports = router;