const express = require('express');
const Joi = require('joi');
const logger = require('./logger');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// it is a middleware function that will be called for every request
// A function that takes a request object and either returns a response to the client or passes control to another middleware function
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')} `);

app.use(express.json());
app.use(express.static('public'));
app.use(logger);
app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}

// app.use(function (req, res, next) {
//     console.log('Authenticating...');
//     // next();
// });
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
    // var course1 = courses.find(c => c.id === parseInt(req.params.id));
    res.send('Hello World'+ courses[0].id+ courses[0].name);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);

}
app.post('/api/courses', (req, res) => {
    
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(courses);
});

app.get('/api/courses', (req, res) => { 
    res.send(courses);
});