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
        .when('/workspace/synopsis/:type', {
            template: '<synopsis></synopsis>',
            activetab: 'workspace'
        })
        // .when('/workspace/synopsis', {
        //     templateUrl: "js/partials/workspaces/synopsis.template.html",
        //     activetab: 'workspace'
        // })
        // .when('/workspace/nextStage', {
        //     templateUrl: "js/partials/workspaces/next-stage.html",
        //     activetab: 'workspace'
        // })
        // .when('/workspace/discover', {
        //     templateUrl: "js/partials/workspaces/discover.html",
        //     activetab: 'workspace'
        // })
        // .when('/workspace/nextStagef', {
        //     templateUrl: "js/partials/workspaces/next-stage-2.html",
        //     activetab: 'workspace'
        // })
        // .when('/workspace/uploads', {
        //     templateUrl: "js/partials/workspaces/uploads.html",
        //     activetab: 'workspace'
        // })
        // .when('/workspace/addCourse', {
        //     templateUrl: "js/partials/workspaces/add-course.html",
        //     activetab: 'workspace'
        // })



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