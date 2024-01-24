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
// createCourse();

// async function getCourses() {
//     const courses = await Course
//         .find({ author: 'Mosh', isPublished: true, })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 });
//     console.log(courses);
// }

// compaison query operators

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)

// logical query operators
async function getCourses() {
    const courses = await Course
        // gives courses with price between 10 and 20
        .find({ price: { $gte: 10, $lte: 20 } })

        // gives courses with price equal to 10, 15, 20
        // .find({ price: { $in: [10, 15, 20] } })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

getCourses();