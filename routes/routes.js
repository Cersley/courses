var express = require('express');
var router = express.Router();

var db = require('./queries');

router.get('/courses', db.getAllCourses);
router.get('/courseParam', db.getCourseParam);
router.put('/updatePlace/:courseId', db.updatePlaceCourse);
router.put('/addTypes/:courseId', db.addTypesOfCourse);
router.put('/addSynopsis/:courseId', db.addSynopsisOfCourse);
router.put('/addDiscover/:courseId', db.addDiscoverOfCourse);
router.put('/addImg/:courseId', db.addImg);
router.post('/courses', db.createCourse);
router.delete('/courses/:courseId', db.removeCourse);
router.get('/courses/:courseId', db.getSelectedCourse);

router.get('/uploads', db.getUploads);
router.post('/uploads', db.addResourse);
router.delete('/uploads/:resourseId', db.removeResourse);

router.get('/users', db.getAllUsers);
router.get('/user/:userId', db.getUser);
router.delete('/users/:userId', db.removeUser);
router.put('/users/:userId', db.updateUserPassword);
router.post('/users', db.createUser);

module.exports = router;
