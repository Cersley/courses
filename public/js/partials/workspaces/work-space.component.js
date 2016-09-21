angular
    .module('workSpace')
    .component('workSpace', {
        templateUrl: 'js/partials/workspaces/workspace.template.html',
        controller: function WorkspaceController($location, $http) {
            var self = this;
            self.go = function (hash) {
                if (self.selectType.$valid) {
                    if (1 === 1) {
                        $location.path(hash);
                    }
                }
            }
            self.createCourse = function () {
                $http.post('/courses/create', self.courseData)
                    .then(function successCallback() {
                        self.courseData = {};
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
            }
            $http.get('/courses/course')
                .then(function successCallback(courseInfo) {
                    self.coursesData = courseInfo.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            }
        }
    )
    .component('synopsis', {
        templateUrl: 'js/partials/workspaces/synopsis.template.html',
        controller: function Synopsis($location, $route, $http, $q) {
            var self = this;
            self.param = $route.current.params;
            self.go = function (hash) {
                if (self.Synopsis.$valid) {
                        return $location.path(hash);
                }
            }
            self.selectLastId = function () {
                var deferred = $q.defer();
                $http.get('/courses/selectLastId')
                    .then(function successCallback(resp) {
                        deferred.resolve(resp.data.id)
                    }, function errorCallback(status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
            self.addSynopsisOfCourse = function(titleOfCourse, subtitleOfCourse,
                                                whoOfCourse, whyOfCourse, whatOfCourse) {
                if (self.Synopsis.$valid) {
                    self.selectLastId().then(
                        function successCallback(res) {
                            $http.put('/courses/addSynopsis/' + res,
                                {title: titleOfCourse,
                                subtitle: subtitleOfCourse,
                                who: whoOfCourse,
                                why: whyOfCourse,
                                what: whatOfCourse,
                                courseId: res}
                            )
                        }, function errorCallback(status) {
                            deferred.reject(status);
                        });
                }

            }
        }
    })
    .component('workSpace1', {
            templateUrl: 'js/partials/workspaces/workspace1.template.html',
            controller: function WorkspaceController($location, $http) {
                var self = this;
                self.go = function (hash) {
                    // if (self.Synopsis.$valid) {
                        return $location.path(hash);
                    // }
                }
            }
        }
    )
    .component('discover', {
        templateUrl: 'js/partials/workspaces/discover.template.html',
        controller: function Synopsis($location) {
            var self = this;
            self.go = function(hash){
                $location.path(hash);
            }
        }
    })
    .component('workSpace2', {
            templateUrl: 'js/partials/workspaces/workspace2.template.html',
            controller: function WorkspaceController($location, $http) {
                var self = this;
                self.go = function (hash) {
                    // if (self.Synopsis.$valid) {
                    return $location.path(hash);
                    // }
                }
            }
        }
    )
    .component('upload', {
            templateUrl: 'js/partials/workspaces/upload.template.html',
            controller: function WorkspaceController($location, $http) {
                var self = this;
                self.go = function(hash){
                    $location.path(hash);
                }
                self.uploads = [
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
            }
        }
    )
    .component('addCourse', {
            templateUrl: 'js/partials/workspaces/addCourse.template.html',
            controller: function WorkspaceController($location, $http) {
                var self = this;
                self.go = function (hash) {
                    // if (self.Synopsis.$valid) {
                    return $location.path(hash);
                    // }
                }
            }
        }
    )

