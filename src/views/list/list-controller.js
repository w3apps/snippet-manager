;(function (angular) {
    'use strict';

    angular
        .module('snippetManager.views')
        .controller('SnippetListController', SnippetListController);

    SnippetListController.$inject = ['resolvedSnippetsList'];

    function SnippetListController(resolvedSnippetsList) {

        var self = this;

        // holds the resolved snippets list
        self.snippetsList = resolvedSnippetsList;
        self.descriptionLimit = 30; // the limit of characters for the description

    }

})(window.angular);
