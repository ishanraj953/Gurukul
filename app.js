const express = require("express");
const path = require("path");
const ejsmate = require("ejs-mate");

const app = express();
const port = 3000;

app.engine('ejs',ejsmate);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) => {
    res.send("Hi, I am root");
});

app.get("/home", (req,res) => {
    res.render("transport/home.ejs");
});

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})