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
        .when('/workspace1', {
            template: '<work-space1></work-space1>',
            activetab: 'workspace'
        })
        .when('/workspace/synopsis/:typeCourse', {
            template: '<synopsis></synopsis>',
            activetab: 'workspace'
        })
        .when('/workspace/discover', {
            template: '<discover></discover>',
            activetab: 'workspace'
        })
        .when('/workspace2', {
            template: '<work-space2></work-space2>',
            activetab: 'workspace'
        })
        .when('/workspace/upload', {
            template: '<upload></upload>',
            activetab: 'workspace'
        })
        .when('/addCourse', {
            template: '<add-course></add-course>',
            activetab: 'workspace'
        })



        .when('/redactCourse', {
            templateUrl: "js/partials/courses/redact/redactCourse.html",
            activetab: 'redact'
        })
        .when('/redSynopsis', {
            templateUrl: "js/partials/courses/redact/redSynopsis.html",
            activetab: 'redact'
        })
        .when('/redDiscover', {
            templateUrl: "js/partials/courses/redact/redDiscover.html",
            activetab: 'redact'
        })
        .when('/redUploads', {
            templateUrl: "js/partials/courses/redact/redUploads.html",
            activetab: 'redact'
        })
        .when('/redactCourse1', {
            templateUrl: "js/partials/courses/redact/redactCourse1.html",
            activetab: 'redact'
        })
        .when('/redactCourse2', {
            templateUrl: "js/partials/courses/redact/redactCourse2.html",
            activetab: 'redact'
        })
        .when('/redactCourse3', {
            templateUrl: "js/partials/courses/redact/redactCourse3.html",
            activetab: 'redact'
        })


        .when('/users', {
            template: '<user-list></user-list>',
            activetab: 'users'
        })
        .when('/users/:userId/:userName/:userRole', {
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