var promise = require('bluebird');
var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connection = {
    host: 'localhost',
    port: 5432,
    database: 'courses_editor',
    user: 'yaroslav',
    password: '123'
};
var db = pgp(connection);

module.exports = {
    getAllCourses: getAllCourses,
    // getSingleCourse: getSingleCourse,
    // createCourse: createCourse,
    // updateCourse: updateCourse,
    removeCourse: removeCourse
};
function getAllCourses(req, res) {
    db.any('select * from courses')
        .then(function (data) {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function removeCourse(req, res) {
    // var courseId = req.params.id;
    db.result('delete from courses')
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
//
// function createCourse(req, res, next) {
//     // req.body.age = parseInt(req.body.age);
//     db.none('insert into courses(avatar, name, status, place)' +
//         "values('sadfw', 'asefs', 'awefds', 'awesfd')")
//         // req.body)
//         .then(function (data) {
//
//             // res.status(200)
//             //     .json({
//             //         status: 'success',
//             //         message: 'Inserted one puppy'
//             //     });
//         })
//         // .catch(function (err) {
//         //     return next(err);
//         // });
// }
//
// function updateCourse(req, res, next) {
//     db.none('update courses set avatar=$1, name=$2, status=$3, place=$4 where id=$5',
//         ['SOMEARTRIGHTHERE', 'owerqw', 'werqw',
//             'uwert', 4])
//             // res.status(200)
//             //     .json({
//             //         status: 'success',
//             //         message: 'Updated puppy'
//             //     });
//         //    console.log(getAllCourses())
//         // .catch(function (err) {
//         //     return next(err);
//         // });
// }
//

