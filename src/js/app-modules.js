;(function (angular) {
    'use strict';

    angular.module('snippetManager', [
        'ngRoute',
        'ngResource',
        'ngMaterial',

        'snippetManager.views'
    ]);

    angular.module('snippetManager.views', []);

})(window.angular);
