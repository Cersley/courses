app.controller("MainController",  function($scope, $route, courses) {
    $scope.$route = $route;
    $scope.addCourse = '+ Add Course';
    // $scope.changeNameOfAddCourse = function() { //Додумать!!!!!!!!!!!!!
    //     if (elem.hasClass('.active')) {
    //         $scope.addCourse = 'Setap Course';
    //     } else {
    //         $scope.addCourse = '+ Add Course';
    //     }
    //
    // }
    $scope.availableCourses = [
            {id: '1', name: 'construction'},
            {id: '2', name: 'public'},
            {id: '3', name: 'deletion'},
            {id: '3', name: 'intern'}
        ],
        $scope.selected = $scope.availableCourses[0];
    // $scope.courses = [
    //     {
    //         avatar: "http://loremflickr.com/255/255",
    //         name: 'asdf',
    //         status: 'user'
    //     },
    //     {
    //         avatar: "http://loremflickr.com/255/255",
    //         name: 'admin',
    //         status: 'admin'
    //     },
    //     {
    //         avatar: "http://loremflickr.com/255/255",
    //         name: 'autodor',
    //         status: 'wert'
    //     }
    // ]
    courses.success(function(data) {
        $scope.severalUsers = data;
    })
})