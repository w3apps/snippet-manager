module.exports = {

    codeQuality: [
        'jshint',
        'jscs'
    ],

    prepareFiles: [
        'clean:dist',

        'copy:indexFile',
        'ngtemplates',
        'concat',

        'clean:temp'
    ],

    build: [
        'codeQuality',
        'prepareFiles'
    ]

};
