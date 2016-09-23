app.controller("RedactCoursesController",
    function($scope, $http, $routeParams, $route, $location, $timeout, $anchorScroll) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$on('$routeChangeSuccess', function(event, current) {
        $scope.paramId = $route.current.params.courseId;
        $http.get('/courses/redactCourse/' + $scope.paramId)
            .then(function successCallback(courseOne) {
                $scope.courseData = courseOne.data;
            }, function errorCallback(err) {
                console.log('error', err);
            });
    });
    $scope.go = function (hash) {
            $timeout(function () {
                $location.path(hash);
                $location.hash("topRed");
                $anchorScroll();
            }, 500);
    }
    $scope.addSynopsisOfCourse = function(titleOfCourse, subtitleOfCourse,
                                        whoOfCourse, whyOfCourse, whatOfCourse, courseId) {
        $http.put('/courses/addSynopsis/' + courseId,
            {
                title: titleOfCourse,
                subtitle: subtitleOfCourse,
                who: whoOfCourse,
                why: whyOfCourse,
                what: whatOfCourse,
                courseId: courseId
            }
        )
    }
    $scope.addDiscoverOfCourse = function(purposeGoal, learningContent, activites, learningCourse,
                                   learningGoals, courseId) {
        $http.put('/courses/addDiscover/' + courseId,
            {
                purposeGoal: purposeGoal,
                learningContent: learningContent,
                activites: activites,
                learningCourse: learningCourse,
                learningGoals: learningGoals,
                courseId: courseId
            }
        )
    }
    $http.get('/courses/images')
        .then(function successCallback(img) {
            $scope.images = img.data;
        }, function errorCallback(err) {
            console.log('error', err);
        });
    $scope.addImg = function(img, courseId) {
        $http.put('/courses/addImg/' + courseId, {upload: img, courseId: courseId})
    }
});