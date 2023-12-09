const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const nodeData = require("../data/nodejs.json");

router.use(bodyParser.json());

router.post("/", (req, res) => {
    if (req.body.name !== "rke" || req.body.code !== "143") {
        res.status(401).json({
            message: "invalid credentials",
        });
    } else {
        res.status(200).json({ nodeData });
    }
});

module.exports = router;
