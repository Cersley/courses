var app = angular.module("myApp", ['ngRoute', 'workSpace', 'userList', 'userInfo', 'addUser']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/courses/construction', {
            templateUrl: "js/partials/courses/construction.html",
            activetab: 'courses',
            activedroptab: 'construction'
        })
        .when('/courses/public', {
            templateUrl: "js/partials/courses/public.html",
            activetab: 'courses',
            activedroptab: 'public'
        })
        .when('/courses/intern', {
            templateUrl: "js/partials/courses/intern.html",
            activetab: 'courses',
            activedroptab: 'intern'
        })
        .when('/courses/deletion', {
            templateUrl: "js/partials/courses/deletion.html",
            activetab: 'courses',
            activedroptab: 'deletion'
        })


        .when('/workspace', {
            template: '<work-space></work-space>',
            activetab: 'workspace'
        })
        .when('/workspace/synopsis', {
            template: '<synopsis></synopsis>',
            activetab: 'workspace'
        })
        .when('/workspace/discover', {
            template: '<discover></discover>',
            activetab: 'workspace'
        })
        .when('/workspace/upload', {
            template: '<upload></upload>',
            activetab: 'workspace'
        })


        .when('/redactCourse/:courseId', {
            templateUrl: 'js/partials/courses/redact/redact-course.template.html',
            activetab: 'redact'
        })
        .when('/redSynopsis/:courseId', {
            templateUrl: "js/partials/courses/redact/red-synopsis.template.html",
            activetab: 'redact'
        })
        .when('/redDiscover/:courseId', {
            templateUrl: "js/partials/courses/redact/red-discover.template.html",
            activetab: 'redact'
        })
        .when('/redUploads/:courseId', {
            templateUrl: "js/partials/courses/redact/red-uploads.template.html",
            activetab: 'redact'
        })


        .when('/allUsers', {
            template: '<user-list></user-list>',
            activetab: 'users'
        })
        .when('/userInfo/:userId', {
            template: '<user-info></user-info>',
            // controller: 'UserListController',
            activetab: 'users',
            activeuser: 'user'
        })
        .when('/users/addUser', {
            template: '<add-user></add-user>',
            activetab: 'users'
        })


        .otherwise({redirectTo: '/courses/construction'});

    $locationProvider.html5Mode(true);
})