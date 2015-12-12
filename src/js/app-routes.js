;(function (angular) {
    'use strict';

    angular
        .module('snippetManager')
        .config(configRoutes);

    configRoutes.$inject = ['$routeProvider'];

    function configRoutes($routeProvider) {

        console.log('aaa');

        $routeProvider

            // Sniptes List route
            .when('/list', {
                template: '/views/list/list.html',
                controller: 'SnippetListController',
                controllerAs: 'listCtrl'
            })

            // if no route is matched go to the List
            .otherwise({
                redirectTo: '/list'
            });

    }

})(window.angular);
