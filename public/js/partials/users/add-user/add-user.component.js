angular.
    module('addUser').
    component('addUser', {
        templateUrl: 'js/partials/users/add-user/add-user.template.html',
        controller: function AddUserController($http, $route, $location) {
            var self = this;
            self.createUser = function(hash) {
                alert('User ' + self.userData.name + ' was create');
                $location.path(hash)
                $http.post('/users/createUser/', self.userData)
                    .then(function successCallback() {
                        self.userData = {};
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
            }
        }
})