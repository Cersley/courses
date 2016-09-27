angular.
    module('userList').
    component('userList', {
        templateUrl: 'js/partials/users/user-list/user-list.template.html',
        controller: function UserListController($http, $anchorScroll, $location) {
                var self = this;
                self.usersData = {};
                $http.get('/users')
                    .then(function successCallback(userInfo) {
                        self.usersData = userInfo.data;
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
                self.removeUser = function(userId, item) {
                    self.usersData.splice(item, 1);
                    $http.delete('/users/' + userId);
                };
                self.goToUser = function() {
                    $location.hash('top')
                    $anchorScroll();
                }
            }
    });