angular.
    module('addUser').
    component('addUser', {
        templateUrl: 'js/partials/users/add-user/add-user.template.html',
        controller: function AddUserController($http, $route) {
            var self = this;
            self.createUser = function(userId) {
                $route.reload();
                alert('User ' + self.userData.name + 'was create');
                $http.post('/users/createUser/', self.userData)
                    .then(function successCallback() {
                        self.userData = {};
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
            }
        }
})