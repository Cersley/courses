angular
    .module('workSpace')
    .component('workSpace', {
        templateUrl: 'js/partials/workspaces/workspace.template.html',
        controller: function WorkspaceController($location, $http, $anchorScroll, $timeout) {
            var self = this;
            self.go = function (hash) {
                if (self.selectType.$valid) {
                    $timeout(function () {
                        $location.path(hash);
                        $location.hash("setup");
                        $anchorScroll();
                    }, 500);
                }
            }
            self.courseParam = [];
            $http.get('/courses/courseParam')
                .then(function successCallback(course) {
                    self.courseParam = course.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            self.addTypes = function(typeOfCourse, courseId) {
                $http.put('/courses/addTypes/' + courseId, {types: typeOfCourse, courseId: courseId})
            }
            self.createArea = function(courseId, kindOfItem) {
                $http.put('/courses/update/' + courseId, {place: kindOfItem, courseId})
            }
        }
    })
    .component('synopsis', {
        templateUrl: 'js/partials/workspaces/synopsis.template.html',
        controller: function Synopsis($http, $location, $anchorScroll, $timeout) {
            var self = this;
            self.go = function (hash) {
                    $timeout(function () {
                        $location.path(hash);
                        $location.hash("setup");
                        $anchorScroll();
                    }, 500);
            }
            $http.get('/courses/courseParam')
                .then(function successCallback(course) {
                    self.courseParam = course.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            self.addSynopsisOfCourse = function(titleOfCourse, subtitleOfCourse,
                                                whoOfCourse, whyOfCourse, whatOfCourse, courseId) {
                $http.put('/courses/addSynopsis/' + courseId,
                    {
                        title: titleOfCourse,
                        subtitle: subtitleOfCourse,
                        who: whoOfCourse,
                        why: whyOfCourse,
                        what: whatOfCourse,
                        courseId: courseId
                    }
                )
            }

        }
    })
    .component('discover', {
        templateUrl: 'js/partials/workspaces/discover.template.html',
        controller: function Synopsis($location, $http, $anchorScroll, $timeout) {
            var self = this;
            self.go = function (hash) {
                    $timeout(function () {
                        $location.path(hash);
                        $location.hash("setup");
                        $anchorScroll();
                    }, 500);
            }
            $http.get('/courses/courseParam')
                .then(function successCallback(course) {
                    self.courseParam = course.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            self.addDiscoverOfCourse = function(purposeGoal, learningContent, activites, learningCourse,
                                                learningGoals, courseId) {
                $http.put('/courses/addDiscover/' + courseId,
                    {
                        purposeGoal: purposeGoal,
                        learningContent: learningContent,
                        activites: activites,
                        learningCourse: learningCourse,
                        learningGoals: learningGoals,
                        courseId: courseId
                    }
                )
            }
        }
    })
    .component('upload', {
            templateUrl: 'js/partials/workspaces/upload.template.html',
            controller: function WorkspaceController($location, $anchorScroll, $scope, $http, $timeout) {
                var self = this;
                self.go = function (hash) {
                    $timeout(function () {
                        $location.path(hash);
                        $location.hash("setup");
                        $anchorScroll();
                    }, 500);
                }
                self.courseParam = [];
                $http.get('/courses/courseParam')
                    .then(function successCallback(course) {
                        self.courseParam = course.data;
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
                self.images = [];
                $http.get('/courses/images')
                    .then(function successCallback(img) {
                        self.images = img.data;
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
                self.addImg = function(img, courseId) {
                    $http.put('/courses/addImg/' + courseId, {upload: img, courseId: courseId})
                }
                $scope.uploadFile = function(event) {
                    $scope.files = event.target.files;
                    var reader = new FileReader();
                    reader.onloadend = function(res) {
                        $scope.$apply(function () {
                            $scope.img = res.currentTarget.result;
                        });
                    }
                    reader.readAsDataURL(file);
                };
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
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onloadend = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.currentTarget.files[0]);
                });
            }
        }
    }]);

