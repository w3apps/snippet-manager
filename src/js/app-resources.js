;(function (angular) {
    'use strict';

    angular
        .module('snippetManager')
        .factory('appResources', appResources);

    appResources.$inject = ['$resource'];

    function appResources($resource) {

        var baseUrl = 'https://em-snippet.firebaseio.com/';

        return {
            snippets: $resource(baseUrl + 'snippets/:snippetId.json', null, {

                addSnippet: {
                    method: 'POST',
                    cache: false
                },

                getSnippets: {
                    method: 'GET',
                    cache: false
                },

                getSnippetDetails: {
                    method: 'GET',
                    cache: true
                }

            })
        };

    }

})(window.angular);
