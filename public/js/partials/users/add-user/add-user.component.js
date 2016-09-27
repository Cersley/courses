angular.
    module('addUser').
    component('addUser', {
        templateUrl: 'js/partials/users/add-user/add-user.template.html',
        controller: function AddUserController($http, $route, $location, $timeout) {
            var self = this;
            self.createUser = function(hash) {
                $timeout(function () {
                    $location.path(hash);
                }, 300);
                $http.post('/users', self.userData)
                    .then(function successCallback() {
                        self.userData = {};
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
            }
        }
})