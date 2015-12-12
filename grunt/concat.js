module.exports = function() {
    'use strict';

    return {
        scripts: {
            src: [

                // we need this to make sure this file is included before all the others as it has the modules declaration
                'src/js/angular-modules.js',

                'src/**/*.js',
                'dist/temp/templates/templates.js',

                // 3rd party libraries
                'node_modules/angular-route/angular-route.js'
            ],
            dest: 'dist/main.js'
        }
    };

};
