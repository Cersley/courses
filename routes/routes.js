var express = require('express');
var router = express.Router();

var db = require('./queries');

router.get('/courses/course', db.getAllCourses);
router.get('/courses/courseParam', db.getCourseParam);
router.put('/courses/update/:courseId', db.updatePlaceCourse);
router.put('/courses/addTypes/:courseId', db.addTypesOfCourse);
router.put('/courses/addSynopsis/:courseId', db.addSynopsisOfCourse);
router.put('/courses/addDiscover/:courseId', db.addDiscoverOfCourse);
router.put('/courses/addImg/:courseId', db.addImg);
router.post('/courses/create', db.createCourse);
router.delete('/courses/remove/:courseId', db.removeCourse);
router.get('/courses/redactCourse/:courseId', db.getSelectedCourse);

router.get('/courses/uploads', db.getUploads);
router.post('/courses/addResourse', db.addResourse);
router.delete('/courses/removeResourse/:resourseId', db.removeResourse);

router.get('/users', db.getAllUsers);
router.get('/user/:userId', db.getUser);
router.delete('/users/:userId', db.removeUser);
router.put('/users/:userId', db.updateUserPassword);
router.post('/users', db.createUser);

module.exports = router;
