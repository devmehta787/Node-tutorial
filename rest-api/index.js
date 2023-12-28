const express = require('express');
const app = express();
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
    res.send([1, 2, 3, 4]); 
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

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    if (!course) res.status(404).send(`The course with the given ID was not found`);
    res.send(course.name);
});


app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(courses);
});