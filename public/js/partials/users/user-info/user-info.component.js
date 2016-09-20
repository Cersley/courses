angular.
    module('userInfo').
    component('userInfo', {
        templateUrl: 'js/partials/users/user-info/user-info.template.html',
        controller: function UserListController($http, $routeParams, $route) {
            var self = this;
            self.params = $route.current.params;
            self.user = {};
            $http.get('/users/list').then(function(userInfo) {
                self.user = userInfo.data;
            });
            self.updateUserPassword = function(userId, pass) {
                $route.reload();
                $http.put('/users/updatePassword/' + userId, {password: pass, user_id: userId});
            }
        }
    });