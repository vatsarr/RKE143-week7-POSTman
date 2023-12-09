const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const pumpkinData = require("../data/pumpkin.json");
const broccoliData = require("../data/broccoli.json");

router.use(bodyParser.json());

router.get("/random-pumpkin-drink", (req, res) => {
    const rnd = Math.floor(
        Math.random() * pumpkinData.Categories["Pumpkin Drinks"].length
    );
    const pumpkinDrinks = pumpkinData.Categories["Pumpkin Drinks"];
    const rndDrink = pumpkinDrinks[rnd];
    res.status(200).json(rndDrink);
});

router.get("/pumpkin", (req, res) => {
    res.status(200).json({ message: "Got pumpkin?" });
});

router.post("/pumpkin", (req, res) => {
    console.log(req.body);

    if (req.body.userName !== "admin" || req.body.password !== "1234") {
        res.status(200).json({ broccoliData });
    } else {
        res.status(200).json({ pumpkinData });
    }

    //res.status(200).json({ message: "Welcome, my pumpkin" });
});

module.exports = router;
