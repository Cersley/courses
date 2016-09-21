var express = require('express');
var router = express.Router();

var db = require('./queries');

router.get('/courses/course', db.getAllCourses);
router.put('/courses/update/:courseId', db.updatePlaceCourse);
router.put('/courses/addSynopsis/:courseId', db.addSynopsisOfCourse);
router.post('/courses/create', db.createCourse);
router.delete('/courses/remove/:course_id', db.removeCourse);
router.get('/courses/selectLastId', db.selectLastId);

router.get('/users/list', db.getAllUsers);
router.delete('/users/remove/:user_id', db.removeUser);
router.put('/users/updatePassword/:user_id', db.updateUserPassword);
router.post('/users/createUser/', db.createUser);

module.exports = router;
