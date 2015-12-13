describe('List controller', function () {
    'use strict';

    var ctrl;
    var mockList = [
        {
            author: 'a',
            description: 'b',
            code: 'c'
        },
        {
            author: 'a1',
            description: 'b1',
            code: '1'
        }
    ];

    beforeEach(function () {

        module('snippetManager');

        module(function ($provide) {
            $provide.value('resolvedSnippetsList', mockList);
        });

        inject(function (_$controller_) {
            ctrl = _$controller_('SnippetListController');
        });

    });

    it('should have the data for the snippets list', function () {

        expect(JSON.stringify(ctrl.snippetsList)).toBe(JSON.stringify(mockList));

    });

});
