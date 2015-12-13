;(function (angular) {
    'use strict';

    angular
        .module('snippetManager')
        .config(configRoutes);

    configRoutes.$inject = ['$routeProvider'];

    function configRoutes($routeProvider) {

        $routeProvider

            // snippets List
            .when('/list', {
                templateUrl: 'views/list/list.html',
                controller: 'SnippetListController',
                controllerAs: 'listCtrl',
                resolve: {
                    resolvedSnippetsList: ['appResources', function (appResources) {
                        return appResources.snippets.getSnippets();
                    }]
                }
            })

            // Add snippet
            .when('/add-snippet', {
                templateUrl: 'views/add-snippet/add.html',
                controller: 'AddSnippetController',
                controllerAs: 'addCtrl'
            })

            // if no route is matched go to the List
            .otherwise({
                redirectTo: '/list'
            });

    }

})(window.angular);
