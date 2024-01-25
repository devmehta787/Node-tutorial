// load the mongoose module
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// create a schema for the collection
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date, 
    isPublished: Boolean,
    price: Number
});

// create a model for the collection
const Course = mongoose.model('Course', courseSchema);

// //task -2  get all the published frontend and backend courses, sort them by their price in a descending order, pick only their name and author, and display them

async function getCourses() { 
    const courses = await Course
        .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
        .sort({ price: -1 })
        .select({ name: 1, author: 1, price: 1});
    console.log(courses);
}

// call the function
getCourses()