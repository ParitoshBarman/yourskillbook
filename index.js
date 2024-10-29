const express = require("express")
const path = require("path");
const fs = require("fs");


const port = 8080;
const staticPath = path.join(__dirname, "public")



// let jsonFilePath = path.join(__dirname, 'course.json');
// fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
//     if (err) {
//     //   return res.status(500).send('Error reading JSON file');
//     console.log('Error reading JSON file')
//     }

//     // Parse the JSON data
//     const courses = JSON.parse(data);

//     // Send the parsed data as a response
//     // res.json(courses);
//     console.log(courses)
//   });

  

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
app.get("/events", (req, res)=>{
    res.render("events")
})
app.get("/job-oriented-training", (req, res)=>{
    res.render("job-oriented-training")
})
app.get("/founder", (req, res)=>{
    res.render("founder")
})
app.get("/forgot-password", (req, res)=>{
    res.render("forgot-password")
})
app.get("/student-login", (req, res)=>{
    res.render("student-login")
})


app.get("/course-details", (req, res)=>{
    res.render("course-details")
})
app.get("/course-details2", (req, res)=>{
    res.render("course-details2")
})
app.get("/course-details3", (req, res)=>{
    res.render("course-details3")
})
app.get("/course-details4", (req, res)=>{
    res.render("course-details4")
})



app.get("/ourvideos", (req, res)=>{
    res.render("ourvideos")
})
app.get("/career", (req, res)=>{
    res.render("career")
})
app.get("/event-details", (req, res)=>{
    res.render("event-details")
})
app.get("/event-detailsup1", (req, res)=>{
    res.render("event-detailsup1")
})
app.get("/event-detailsup2", (req, res)=>{
    res.render("event-detailsup2")
})
app.get("/event-detailsup3", (req, res)=>{
    res.render("event-detailsup3")
})


app.get("/event-details1", (req, res)=>{
    res.render("event-details1")
})
app.get("/event-details2", (req, res)=>{
    res.render("event-details2")
})
app.get("/event-details3", (req, res)=>{
    res.render("event-details3")
})
app.get("/event-details4", (req, res)=>{
    res.render("event-details4")
})
app.get("/event-details5", (req, res)=>{
    res.render("event-details5")
})
app.get("/event-details6", (req, res)=>{
    res.render("event-details6")
})

app.get("/event-details7", (req, res)=>{
    res.render("event-details7")
})

app.get("/event-details8", (req, res)=>{
    res.render("event-details8")
})

app.get("/event-details9", (req, res)=>{
    res.render("event-details9")
})

app.get("/event-details10", (req, res)=>{
    res.render("event-details10")
})

app.get("/event-details11", (req, res)=>{
    res.render("event-details11")
})

app.get("/event-details12", (req, res)=>{
    res.render("event-details12")
})

app.get("/event-details13", (req, res)=>{
    res.render("event-details13")
})
app.get("/event-details14", (req, res)=>{
    res.render("event-details14")
})


app.listen(port, ()=>{
    console.log("Server is listing port" + port);
})