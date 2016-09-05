var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/courses/construction', {
            templateUrl: "js/partials/courses/construction.html",
            activetab: 'courses'
        })
        .when('/workspace/selectType', {
            templateUrl: "js/partials/workspaces/select-type.html",
            activetab: 'workspace'
        })
        .when('/users', {
            templateUrl: "js/partials/users.html",
            activetab: 'users'
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
        .when('/workspace/synopsis', {
            templateUrl: "js/partials/workspaces/synopsis.html"
        })
        .when('/workspace/nextStage', {
            templateUrl: "js/partials/workspaces/next-stage.html"
        })
        .when('/workspace/discover', {
            templateUrl: "js/partials/workspaces/discover.html"
        })
        .when('/workspace/nextStagef', {
            templateUrl: "js/partials/workspaces/next-stage-2.html"
        })
        .when('/workspace/uploads', {
            templateUrl: "js/partials/workspaces/uploads.html"
        })
        .when('/workspace/addCourse', {
            templateUrl: "js/partials/workspaces/add-course.html"
        })
        .otherwise({redirectTo: '/courses/construction'});
})