;(function (angular) {
    'use strict';

    angular
        .module('snippetManager.views')
        .controller('AddSnippetController', AddSnippetController);

    AddSnippetController.$inject = ['$location', '$mdToast', 'appResources'];

    function AddSnippetController($location, $mdToast, appResources) {

        var self = this;

        self.snippet = {}; // holds the data for a snippet from the view

        // method triggered by the Save button to store the data
        self.saveSnippet = function () {

            // store the data on server
            appResources.snippets.addSnippet(self.snippet);

            // show user friendly notification
            $mdToast.show(
                $mdToast.simple()
                    .content('Your code snippet was added!')
                    .hideDelay(3000)
            );

            $location.path('/list');

        };

    }

})(window.angular);
