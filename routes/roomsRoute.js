const express = require("express");
const Router  = express.Router();

const Room = require('../models/room')

Router.get("/getallrooms", async(req, res) => {

    try {
        const rooms = await Room.find({})
        return res.json({rooms });
    }catch (error) {
        return res.status(400).json({message: error });
    }
})

module.exports = router;