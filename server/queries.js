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
    getAllCourses: getAllCourses
    // getSingleCourse: getSingleCourse,
    // createCourse: createCourse,
    // updateCourse: updateCourse,
    // removeCourse: removeCourse
};
function getAllCourses(req, res, next) {
    db.any('select * from courses')
        .then(function (data) {
            return data;
            // res.status(200)
            //     .json({
            //         data: data,
            //         message: 'Retrieved ALL puppies'
            //     });
        })
        .catch(function (error) {
            console.log(error);
        });
}

// function getSingleCourse(req, res, next) {
//     var courseID = 2;
//     db.one("select * from courses where name = 'admin'", courseID)
//         .then(function (data) {
//             //res.status(200)
//             //     .json({
//             //         status: 'success',
//             //         data: data,
//             //         message: 'Retrieved ONE puppy'
//             //     });
//         })
//         // .catch(function (err) {
//         //     return next(err);
//         // });
// }
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
// function removeCourse(req, res, next) {
//     // var pupID = parseInt(req.params.id);
//         db.result('delete from courses where id = ' + 11)
//   //       // .then(function (result) {
//   //           /* jshint ignore:start */
//   // //          console.log(getAllCourses())
//   //           // res.status(200)
//   //           //     .json({
//   //           //         status: 'success',
//   //           //         message: `Removed ${result.rowCount} puppy`
//   //           //     });
//   //           /* jshint ignore:end */
//   //       // })
//   //       // .catch(function (err) {
//   //       //     return next(err);
//   //       // });
// }
