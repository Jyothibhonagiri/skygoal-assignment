const express = require("express");
const jwt = require("jsonwebtoken");
const Authmodel = require("../models/Auth");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/signup", async function (req, res) {
    const { fullname, email, password, repassword } = req.body
    let isUserExist = await Authmodel.Authmodel.findOne({ email: email })
    if (isUserExist) {
        res.send({ message: "user already exist", success: false })
    }
    const newUser = new Authmodel.Authmodel({ ...req.body, active: true })
    const createdUser = await newUser.save();
    res.send({ message: "user signup successfully", success: true })
})

router.post("/login", async function (req, res) {
    const { fullname, email, password, repassword } = req.body
    let isUserExist = await Authmodel.Authmodel.findOne({ email: email })
    if (isUserExist) {
        if (password === isUserExist.password) {
            if (isUserExist.active === false) {
                return res.send({ message: "your account has been deactivated", success: false })
            } else {
                let token = jwt.sign({ email: isUserExist.email, _id: isUserExist._id }, "testkey")
                return res.send({ message: "user logged successfully", success: true, token: token, email: isUserExist.email, userId: isUserExist._id, })
            }

        } else {
            return res.send({ message: "invalid credentials", success: false })
        }
    } else {
        return res.send({ message: "user not exist", success: false })
    }
}
)

module.exports = router