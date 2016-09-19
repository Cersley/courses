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
    removeCourse: removeCourse,
    updatePlaceCourse: updatePlaceCourse,
    getAllUsers: getAllUsers,
    removeUser: removeUser,
    updateUserPassword: updateUserPassword,
    createUser: createUser
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
    var courseId = req.params.course_id;
    db.result('delete from courses where id = $1', courseId)
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function updatePlaceCourse(req, res) {
    db.none("update courses set place=$1 where id=$2", [req.body.place, req.params.courseId])
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function getAllUsers(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function removeUser(req, res) {
    var userId = req.params.user_id;
    db.result('delete from users where id = $1', userId)
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function updateUserPassword(req, res) {
    db.none("update users set password=$1 where id=$2", [req.body.password, req.params.user_id])
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
//
function createUser(req, res, next) {
    db.none("insert into users (name, role, password, stars, avatar, email, department)" +
        "values($1, $2, $3, $4, $5, $6, $7)",
        [req.body.name, req.body.role, req.body.password, req.body.stars, req.body.avatar, req.body.email, req.body.department])
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
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

