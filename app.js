const express = require("express");
const path = require("path");
const ejsmate = require("ejs-mate");
const mongoose = require("mongoose");
const Student = require("./model/student");
const { urlencoded } = require("body-parser");

const app = express();
const port = 3000;

app.engine('ejs',ejsmate);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

main()
.then(()=>{
    console.log("DB is working");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/gurukul');
}

app.get("/", (req,res) => {
    res.send("Hi, I am root");
});


app.get("/student", async(req,res)=>{
    const allListing = await Student.find({});
    res.render("transport/student.ejs",{allListing});
});

app.get("/student/home", (req,res) => {
    res.render("transport/home.ejs");
});

app.get("/student/:stdID", async (req, res) => {
    const { stdID } = req.params;
    const student = await Student.findById(stdID);

    res.render("transport/show.ejs", { student });
});

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})