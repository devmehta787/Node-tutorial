const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')
    // mongodb://localhost:27017
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Next Course',
        author: 'Mosh',
        tags: ['node', 'backend'],
        isPublished: true,
    });
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course.find({
        author: 'Mosh',
        isPublished: true,
    });
    console.log(courses);
}

getCourses();