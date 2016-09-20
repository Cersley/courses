angular
    .module('workSpace')
    .component('workSpace', {
        templateUrl: 'js/partials/workspaces/workspace.template.html',
        controller: function WorkspaceController($location, workspaceService, $filter) {
            var self = this;
            self.type = workspaceService.types;
            self.go = function(hash){
                if (self.selectType.$valid) {
                   return $location.path(hash);
                }
            }
        }
    })

    .component('synopsis', {
        templateUrl: 'js/partials/workspaces/synopsis.template.html',
        controller: function Synopsis($location) {
            var self = this;
            self.go = function(hash){
                $location.path(hash);
            }
        }
    })
    .component('directive', {
        templateUrl: 'js/partials/workspaces/synopsis.template.html',
        controller: function Synopsis($location) {
            var self = this;
            self.go = function(hash){
                $location.path(hash);
            }
        }
    })
