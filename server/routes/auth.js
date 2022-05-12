const userModal = require("../models/user");

const express = require("express");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const newuser = new userModal(req.body);
    const user = await newuser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
//router.get("/signout", signout);


router.post("/login", async (req, res) => {
    const {email,password}=req.body;
  try {

    const user = await userModal.findOne({email:email,password:password});
    if (user){
        res.json(user);
    }else{
        res.json({error:true})
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
//router.get("/signout", signout);


module.exports = router;
