;(function (angular) {
    'use strict';

    angular
        .module('snippetManager')
        .config(appConfig);

    appConfig.$inject = ['$locationProvider'];

    function appConfig($locationProvider) {

        // enable html5 routes with hash prefix fallback for older browsers
        $locationProvider.html5Mode(true).hashPrefix('!');

    }

})(window.angular);
