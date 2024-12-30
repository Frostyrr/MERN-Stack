import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world 123!")
})

app.listen(3000, () => {
    console.log("Server started at 3000")
})