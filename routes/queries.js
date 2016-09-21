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
    createUser: createUser,
    createCourse: createCourse,
    addSynopsisOfCourse: addSynopsisOfCourse,
    selectLastId: selectLastId
};


// COURSES


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
function selectLastId(req, res) {
    db.one("SELECT id FROM courses ORDER BY id DESC LIMIT 1")
        .then(function(data) {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function createCourse(req, res) {
    db.one("insert into courses (avatar, name, status, place, types, title, subtitle, who, why, what, " +
        "\"purpose goal\", \"learning content\", activites, \"learning course\", \"learning goals\")" +
        "values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
        [req.body.avatar,
        req.body.name,
        req.body.status,
        req.body.place,
        req.body.types,
        req.body.title,
        req.body.subtitle,
        req.body.who,
        req.body.why,
        req.body.what,
        req.body.purposeGoal,
        req.body.learningContent,
        req.body.activites,
        req.body.learningCourse,
        req.body.learningGoals]
    )
        .then(function (data) {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function addSynopsisOfCourse(req, res) {
    console.log(req.body.title);
    db.none("update courses set title=$1 subtitle=$2 who=$3 why=$4 what=$5 where id=$6",
        [req.body.title,
        req.body.subtitle,
        req.body.who,
        req.body.why,
        req.body.what,
        req.params.courseId]
    )
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}


// USERS

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
function createUser(req, res) {
    db.none("insert into users (name, role, password, stars, avatar, email, department)" +
        "values($1, $2, $3, $4, $5, $6, $7)",
        [req.body.name,
        req.body.role,
        req.body.password,
        req.body.stars,
        req.body.avatar,
        req.body.email,
        req.body.department]
    )
        .then(function () {
            res.send(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

