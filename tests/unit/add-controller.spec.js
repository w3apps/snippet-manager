describe('Add controller', function () {
    'use strict';

    var $location;
    var $httpBackend;
    var $mdToast;
    var ctrl;

    beforeEach(function () {

        module('snippetManager');

        inject(function (_$controller_, _$location_, _$httpBackend_, _$mdToast_) {
            $location = _$location_;
            $httpBackend = _$httpBackend_;
            $mdToast = _$mdToast_;

            ctrl = _$controller_('AddSnippetController', {
                $location: $location,
                $mdToast: $mdToast
            });

        });

    });

    it('should add a new code snippet', function () {

        spyOn($mdToast, 'show');
        spyOn($location, 'path');

        ctrl.saveSnippet();
        $httpBackend.expect('POST').respond({});
        $httpBackend.flush();

        expect($mdToast.show).toHaveBeenCalled();
        expect($location.path).toHaveBeenCalled();

    });

});