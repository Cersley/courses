angular
    .module('workSpace')
    .component('workSpace', {
        templateUrl: 'js/partials/workspaces/workspace.template.html',
        controller: function WorkspaceController($location, $http, $anchorScroll, $timeout, $route) {
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
            $http.get('/courseParam')
                .then(function successCallback(course) {
                    self.courseParam = course.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            self.addTypes = function(typeOfCourse, courseId) {
                $http.put('/addTypes/' + courseId, {types: typeOfCourse, courseId: courseId})
            }
            self.createArea = function(courseId, kindOfItem) {
                $http.put('/updatePlace/' + courseId, {place: kindOfItem, courseId});
                $timeout(function () {
                    var currentPageTemplate = $route.current.templateUrl;
                    $templateCache.remove(currentPageTemplate);
                    $route.reload();
                }, 300);
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
            $http.get('/courseParam')
                .then(function successCallback(course) {
                    self.courseParam = course.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            self.addSynopsisOfCourse = function(titleOfCourse, subtitleOfCourse,
                                                whoOfCourse, whyOfCourse, whatOfCourse, courseId) {
                $http.put('/addSynopsis/' + courseId,
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

            $http.get('/courseParam')
                .then(function successCallback(course) {
                    self.courseParam = course.data;
                }, function errorCallback(err) {
                    console.log('error', err);
                });
            self.addDiscoverOfCourse = function() {
                $http.put('/addDiscover/' + self.courseParam[0].id,
                    {
                        purposeGoal: self.courseParam[0]['purpose goal'],
                        learningContent: self.courseParam[0]['learning content'],
                        activites: self.courseParam[0].activites,
                        learningCourse: self.courseParam[0]['learning course'],
                        learningGoals: self.courseParam[0]['learning goals']
                    }
                )
            }
        }
    })
    .component('upload', {
            templateUrl: 'js/partials/workspaces/upload.template.html',
            controller: function WorkspaceController(Upload, $location, $anchorScroll, $templateCache,
                                                     $scope, $http, $route, $timeout ) {
                var self = this;
                self.go = function (hash) {
                    $timeout(function () {
                        $location.path(hash);
                        $location.hash("setup");
                        $anchorScroll();
                    }, 500);
                }

                self.courseParam = [];
                $http.get('/courseParam')
                    .then(function successCallback(course) {
                        self.courseParam = course.data;
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
                self.uploads = [];
                $http.get('/uploads')
                    .then(function successCallback(img) {
                        self.uploads = img.data;
                    }, function errorCallback(err) {
                        console.log('error', err);
                    });
                $scope.removeResourse = function(resourseId, $index) {
                    self.uploads.splice($index, 1);
                    $http.delete('/uploads/' + resourseId);
                };
                self.addImg = function (uploadResourses) {
                    if (Object.keys($scope.uploaded).length === 0) {
                        $location.url('/workspace');
                    } else {
                        $http.put('/addImg/' + self.courseParam[0].id, {upload: uploadResourses});
                    }
                }
                $scope.uploaded = {};
            }
        }
    )
    .directive("fileread", ['$http','$templateCache', '$route', '$timeout',
        function ($http, $templateCache, $route, $timeout) {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onloadend = function (loadEvent) {
                        scope.$apply(function () {
                            scope.img = {
                                name: changeEvent.target.files[0].name,
                                size: changeEvent.target.files[0].size,
                                created: new Date(),
                                src: loadEvent.target.result
                            };
                            $http.post('/uploads', {images: scope.img})
                            $timeout(function () {
                                var currentPageTemplate = $route.current.templateUrl;
                                $templateCache.remove(currentPageTemplate);
                                $route.reload();
                            }, 100);

                        });
                    };
                    reader.readAsDataURL(changeEvent.currentTarget.files[0]);
                });
            }
        }
    }]);

