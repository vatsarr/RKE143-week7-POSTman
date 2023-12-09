const express = require("express");
const router = express.Router();
const data = require("../data/pumpkin.json");

router.get("/random-pumpkin-drink", (req, res) => {
    const rnd = Math.floor(
        Math.random() * data.Categories["Pumpkin Drinks"].length
    );
    const pumpkinDrinks = data.Categories["Pumpkin Drinks"];
    const rndDrink = pumpkinDrinks[rnd];
    res.status(200).json(rndDrink);
});

router.get("/pumpkin", (req, res) => {
    res.status(200).json({ message: "Got pumpkin?" });
});

router.post("/pumpkin", (req, res) => {
    res.status(200).json({ message: "Welcome" });
});

module.exports = router;
