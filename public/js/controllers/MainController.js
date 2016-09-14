app.controller("MainController",  function($scope, $route, courses, uploads, $routeParams) {
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

    courses.success(function(data) {
        $scope.severalUsers = data;
    })
    uploads.success(function(data) {
        $scope.severalUploads = data;
    })
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
})