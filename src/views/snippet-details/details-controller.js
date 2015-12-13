;(function (angular) {
    'use strict';

    angular
        .module('snippetManager.views')
        .controller('SnippetDetailsController', SnippetDetailsController);

    SnippetDetailsController.$inject = ['resolvedSnippetDetails'];

    function SnippetDetailsController(resolvedSnippetDetails) {

        var self = this;

        // holds the data about the current snippet
        self.snippetData = resolvedSnippetDetails;

    }

})(window.angular);
