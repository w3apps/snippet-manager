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
                        return appResources.snippets.getSnippets({
                            orderBy: '"author"',
                            startAt: 0
                        });
                    }]
                }
            })

            // Add snippet
            .when('/add-snippet', {
                templateUrl: 'views/add-snippet/add.html',
                controller: 'AddSnippetController',
                controllerAs: 'addCtrl'
            })

            // Add snippet
            .when('/snippet-details/:snippetId', {
                templateUrl: 'views/snippet-details/details.html',
                controller: 'SnippetDetailsController',
                controllerAs: 'detailsCtrl',
                resolve: {
                    resolvedSnippetDetails: ['$route', 'appResources', function ($route, appResources) {

                        var snippetId = ($route.current && $route.current.params) ? $route.current.params.snippetId : null;

                        return appResources.snippets.getSnippetDetails({
                            snippetId: snippetId
                        });

                    }]
                }
            })

            // if no route is matched go to the List
            .otherwise({
                redirectTo: '/list'
            });

    }

})(window.angular);
