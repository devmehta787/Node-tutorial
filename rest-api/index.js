const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());

const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));


// all the methods that we need to create a REST API

// app.get()
// app.post()
// app.put()
// app.delete()

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses); 
});

// app.listen(3000, () => console.log('Listening on port 3000'));


// get wth path parameter

// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });

// multiple parameters

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// query string parameters

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });

const courses = [
    { id: 1, name: `abc` },
    { id: 2, name: `def` },
    { id: 3, name: `ghi` },
    { id: 4, name: `jkl` }
];

// get request with path parameter

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    if (!course) res.status(404).send(`The course with the given ID was not found`);
    res.send(course.name);
});


// Post request

// app.post('/api/courses', (req, res) => {
//     if (!req.body.name || req.body.name.length < 3) {
//         req.status(400).send('Name is required and should be minimum 3 characters');
//         return;
//     }
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name,
//     };
//     courses.push(course);
//     res.send(courses);
// });


app.post('/api/courses', (req, res) => {
   
    // console.log(result);
    const { error } = validateCourse(req.body); // object destructuring
    if (error) return res.status(400).send(error.details[0].message);
        
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(courses);
});


//PUT request

app.put('/api/courses/:id', (req, res) => {
    // look up the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ID was not found`);




    // validate
    // if invalid, return 400 - Bad request
    
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    // const result = validateCourse(req.body);
    
    const { error } = validateCourse(req.body); // object destructuring
    if (error) return res.status(400).send(error.details[0].message);


    // update course
    // return the updated course
    course.name = req.body.name;
    res.send(courses);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);

}


app.delete('/api/courses/:id', (req, res) => { 
    // look up the course
    // not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ID was not found`);

    // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // return the same course
    res.send(course);
});