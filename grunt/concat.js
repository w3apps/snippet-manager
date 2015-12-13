module.exports = function() {
    'use strict';

    return {
        scripts: {
            src: [

                // we need this to make sure this file is included before all the others as it has the modules declaration
                'src/js/app-modules.js',

                'src/**/*.js',
                'dist/temp/templates/templates.js'
            ],
            dest: 'dist/main.js'
        }
    };

};
