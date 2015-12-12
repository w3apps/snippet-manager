module.exports = function() {
    'use strict';

    return {
        options: {
            htmlmin: {
                collapseWhitespace: true,
                removeComments: true
            }
        },
        snippetManager: {
            files: [{
                cwd: 'src',
                src: [
                    '**/*.html',
                    '!index.html'
                ],
                dest: 'dist/temp/templates/templates.js'
            }]
        }
    };

};
