;(function (angular) {
    'use strict';

    angular
        .module('snippetManager')
        .factory('appResources', appResources);

    appResources.$inject = ['$resource'];

    function appResources($resource) {

        var baseUrl = 'https://em-snippet.firebaseio.com/';

        return {
            snippets: $resource(baseUrl + 'snippets.json', null, {

                addSnippet: {
                    method: 'POST',
                    cache: false
                },

                getSnippets: {
                    method: 'GET',
                    cache: false
                }

            })
        };

    }

})(window.angular);
