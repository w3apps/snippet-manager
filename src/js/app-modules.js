;(function (angular) {
    'use strict';

    console.log('eee');

    angular.module('snippetManager', [
        'ngRoute',

        'snippetManager.views'
    ]);

    angular.module('snippetManager.views', []);

})(window.angular);
