var express = require('express');
var router = express.Router();

var db = require('./queries');

router.get('/courses/construction/course', db.getAllCourses);
// router.get('/api/puppies/:id', db.getSinglePuppy);
// router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/courses/construction/:courseId', db.removeCourse);

db.removeCourse()
module.exports = router;
