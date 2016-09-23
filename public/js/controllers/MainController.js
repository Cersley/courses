app.controller("MainController",  function($scope, $route,  $location, $window, $routeParams, $http) {
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
        $http.get('/courses/course')
            .then(function successCallback(courseInfo) {
                $scope.coursesData = courseInfo.data;
            }, function errorCallback(err) {
                console.log('error', err);
            });
    });

    $scope.triggerMenu = function() {
        $scope.actionTriggered = !$scope.actionTriggered;
    }
    $scope.availableCourses = [
            {id: '1', name: 'construction'},
            {id: '2', name: 'public'},
            {id: '3', name: 'intern'},
            {id: '4', name: 'deletion'}
    ];
    $scope.coursesData = [];
    $scope.courseData = []
    $scope.createCourse = function () {
        $http.post('/courses/create', self.courseData)
            .then(function successCallback() {
                self.courseData = {};
            }, function errorCallback(err) {
                console.log('error', err);
            });
    }
    $scope.removeCourse = function(courseId, $index) {
        $scope.coursesData.splice($index, 1);
        $http.delete('/courses/remove/' + courseId);
    };
    $scope.updatePlaceCourse = function(courseId, kindOfItem) {
        $window.location.reload();
        $http.put('/courses/update/' + courseId, {place: kindOfItem, courseId})
            .then(function successCallback(courseInfo) {
                $scope.coursesData = courseInfo.data;
            }, function errorCallback(err) {
                console.log('error', err);
            });
    }
    $scope.uploads = [
        {
            id: "1",
            name: "file1",
            avatar: "http://loremflickr.com/70/70",
            created: "new Data",
            size: "54",
            check: "1"
        },
        {
            id: "2",
            name: "file2",
            avatar: "http://loremflickr.com/70/70",
            created: "new Data",
            size: "45",
            check: "2"
        }
    ]
});

