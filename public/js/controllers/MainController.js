app.controller("MainController",  function($scope, $route, $routeParams, $http) {
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
    $scope.$on('$routeChangeSuccess', function(event, current) {
        $scope.addCourse = current.activetab === 'workspace' ? 'Setup Course' : '+ Add Course';
    });
    $scope.actionTriggered = false;
    $scope.triggerMenu = function() {
        $scope.actionTriggered = !$scope.actionTriggered;
    }
    $scope.availableCourses = [
            {id: '1', name: 'construction'},
            {id: '2', name: 'public'},
            {id: '3', name: 'deletion'},
            {id: '3', name: 'intern'}
        ],
    $scope.selected = $scope.availableCourses[0];

    $scope.users = [
        {
            name: "Lasse Sanstrom",
            role: "teacher",
            password: "lasse",
            stars: '1'
        },
        {
            name: "m@m.com",
            role: "teacher",
            password: "mom",
            stars: '4'
        },
        {
            name: "Ivan",
            role: "teacher",
            password: "ivan",
            stars: '5'
        }
    ];
    $scope.formData = {};
    $scope.coursesData = [];
    $http.get('/api/courses')
        .success(function(data, status, headers, config) {
        // This callback will be called asynchronously
        // when the response is available
        console.log('SUCC', data, status, headers, config);
    })
        .error(function(data, status, headers, config) {
        console.error('ERR', data, status, headers, config);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
        // .then(function successCallback(courseInfo) {
        //     console.log('DATA: ', courseInfo);
        //     $scope.coursesData = courseInfo.data;
        // }, function errorCallback(err) {
        //     console.log('error', err);
        // });
})