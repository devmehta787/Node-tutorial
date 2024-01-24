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

// async function getCourses() {
//     const courses = await Course
//         // gives courses with price between 10 and 20
//         .find({ price: { $gte: 10, $lte: 20 } })

//         // gives courses with price equal to 10, 15, 20
//         .find({ price: { $in: [10, 15, 20] } })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 });
//     console.log(courses);
// }
    
// // logical query operators

// // or
// // and

// async function getCourses() {
//     const courses = await Course
//         // .find()
//         // .or([{ author: 'Mosh' }, { isPublished: true }])
//         .find()
//         .and([{ author: 'Mosh' }, { isPublished: true }])
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 });
//     console.log(courses);
// }

// // Regular Expressions
// async function getCourses() {
//     const courses = await Course
        
//     // starts with Mosh
//         .find({ author: /^Mosh/ })
        
//     //ends with Hamedani
//     // adding an i at the end makes it case insensitive
//         .find({ author: /Hamedani$/i })
    
//     // contains Mosh
//         .find({ author: /.*Mosh.*/i })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 });
//     console.log(courses);
// }


// // counting

// async function getCourses() {
//     const courses = await Course
//         .find({ author: /.*Mosh.*/i })
//         .limit(10)
//         .sort({ name: 1 })
//         .count();
//     console.log(courses);
// }

// // pagination
// // /api/courses?pageNumber=2&pageSize=10

// async function getCourses() {
//     const pageNumber = 2;
//     const pageSize = 10;
//     const courses = await Course
//         .find({ author: /.*Mosh.*/i })
//         .skip((pageNumber - 1) * pageSize)
//         .limit(pageSize)
//         .sort({ name: 1 })
//         .count();
//     console.log(courses);
// }

getCourses();