var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/courses/construction', {
            templateUrl: "js/partials/courses/construction.html",
            activetab: 'courses'
        })
        .when('/courses/public', {
            templateUrl: "js/partials/courses/public.html",
            activetab: 'courses'
        })
        .when('/courses/intern', {
            templateUrl: "js/partials/courses/intern.html",
            activetab: 'courses'
        })
        .when('/courses/deletion', {
            templateUrl: "js/partials/courses/deletion.html",
            activetab: 'courses'
        })
        .when('/workspace/selectType', {
            templateUrl: "js/partials/workspaces/select-type.html",
            activetab: 'workspace'
        })
        .when('/users', {
            templateUrl: "js/partials/users/users.html",
            activetab: 'users'
        })
        .when('/workspace/synopsis', {
            templateUrl: "js/partials/workspaces/synopsis.html",
            activetab: 'workspace'
        })
        .when('/workspace/nextStage', {
            templateUrl: "js/partials/workspaces/next-stage.html",
            activetab: 'workspace'
        })
        .when('/workspace/discover', {
            templateUrl: "js/partials/workspaces/discover.html",
            activetab: 'workspace'
        })
        .when('/workspace/nextStagef', {
            templateUrl: "js/partials/workspaces/next-stage-2.html",
            activetab: 'workspace'
        })
        .when('/workspace/uploads', {
            templateUrl: "js/partials/workspaces/uploads.html",
            activetab: 'workspace'
        })
        .when('/workspace/addCourse', {
            templateUrl: "js/partials/workspaces/add-course.html",
            activetab: 'workspace'
        })
        .when('/users/user1', {
            templateUrl: "js/partials/users/users1.html",
            activetab: 'users'
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
        .otherwise({redirectTo: '/courses/construction'});
    $locationProvider.html5Mode(true);
})