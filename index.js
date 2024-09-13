const express = require("express")
const path = require("path");


const port = 8080;
const staticPath = path.join(__dirname, "public")


const app = express()

app.set("view engine", "ejs");

app.use(express.static(staticPath));


app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/about-skill-book", (req, res)=>{
    res.render("about-skill-book")
})
app.get("/gallery", (req, res)=>{
    res.render("gallery")
})
app.get("/accreditation-and-affiliation", (req, res)=>{
    res.render("accreditation-and-affiliation")
})
app.get("/login", (req, res)=>{
    res.render("login")
})
app.get("/sign-up", (req, res)=>{
    res.render("sign-up")
})


app.listen(port, ()=>{
    console.log("Server is listing port" + port);
})