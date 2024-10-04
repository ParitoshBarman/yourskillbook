const fs = require("fs");


// let jsonFilePath = path.join(__dirname, 'courses.json');
// console.log(jsonFilePath);
fs.readFile("course.json", 'utf-8', (err, data) => {
    console.log(data)
    if (err) {
    //   return res.status(500).send('Error reading JSON file');
    console.log('Error reading JSON file')
    }

    // Parse the JSON data
    const courses = JSON.parse(data);

    // Send the parsed data as a response
    // res.json(courses);
    // console.log(courses)

    courses.map((element, indx) => {
      console.log(element);
      console.log(indx);
    });
  });
