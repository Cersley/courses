app.controller("MainController",  function($scope, $route,  $location, $routeParams, $http, $templateCache, $timeout) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$on('$routeChangeSuccess', function(event, current) {
        $scope.addCourse = current.activetab === 'workspace' ? 'Setup Course' : '+ Add Course';
        $scope.selected = (current.activedroptab === 'construction') ? $scope.availableCourses[0] :
                          (current.activedroptab === 'public') ? $scope.availableCourses[1] :
                          (current.activedroptab === 'intern') ? $scope.availableCourses[2] :
                          $scope.availableCourses[3]
        //DATA FETCH
        $http.get('/courses')
            .then(function successCallback(courseInfo) {
                $scope.coursesData = courseInfo.data;
            }, function errorCallback(err) {
                console.log('error', err);
            });
    });
    $scope.actionTriggered = false;
    $scope.triggerMenu = function(courseId) {
        if (courseId) {
            $scope.actionTriggered = !$scope.actionTriggered;
        }
    }
    $scope.availableCourses = [
            {type: 'ow', name: 'construction'},
            {type: 'gw', name: 'public'},
            {type: 'rw', name: 'intern'},
            {type: 'bw', name: 'deletion'}
    ];
    $scope.createCourse = function () {
        $http.post('/courses', self.courseData)
            .then(function successCallback() {
                var currentPageTemplate = $route.current.templateUrl;
                $templateCache.remove(currentPageTemplate);
                $route.reload();
                self.courseData = {};
            }, function errorCallback(err) {
                console.log('error', err);
            });
    }
    $scope.removeCourse = function(courseId, $index) {
        $scope.coursesData.splice($index, 1);
        $http.delete('/courses/' + courseId);
    };
    $scope.updatePlaceCourse = function(courseId, kindOfItem) {
        $timeout(function () {
            var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);
            $route.reload();
        }, 100);
        $http.put('/updatePlace/' + courseId, {place: kindOfItem, courseId})
            .then(function successCallback(courseInfo) {
                $scope.coursesData = courseInfo.data;
            }, function errorCallback(err) {
                console.log('error', err);
            });
    }
});

