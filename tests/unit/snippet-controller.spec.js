describe('List controller', function () {
    'use strict';

    var ctrl;
    var mockDetails = {
        author: 'a',
        description: 'b',
        code: 'c'
    };

    beforeEach(function () {

        module('snippetManager');

        module(function ($provide) {
            $provide.value('resolvedSnippetDetails', mockDetails);
        });

        inject(function (_$controller_) {
            ctrl = _$controller_('SnippetDetailsController');
        });

    });

    it('should have the data for the snippets list', function () {

        expect(JSON.stringify(ctrl.snippetData)).toBe(JSON.stringify(mockDetails));

    });

});
