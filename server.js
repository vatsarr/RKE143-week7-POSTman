const express = require("express");
const pumpkinRouter = require("./routes/pumpkinRoute.js");
const homeTaskRouter = require("./routes/homeTask.js");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});
app.use("/", pumpkinRouter);
app.use("/rke143", homeTaskRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
