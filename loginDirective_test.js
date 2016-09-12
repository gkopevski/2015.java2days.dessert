/**
 * Created by gkopevski on 3/14/2016.
 */
'use strict';

describe('login form directive', function () {

    var $compile, isolatedScope, $scope, directiveElem;

    beforeEach(function () {
        module('loginForm');
        inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
            $scope.name ='Endava';
            $scope.fixedName = 'Endava';
        });
        directiveElem = getCompiledElement();
        isolatedScope = directiveElem.isolateScope();
    });

    function getCompiledElement() {
        var element = angular.element('<login name="name" fixedName="fixedName"></login>');
        var compiledElement = $compile(element)($scope);
        $scope.$digest();
        return compiledElement;
    }

    describe('method for checking successful login', function () {

        it('should return false for bad credentials', function () {
            isolatedScope.username = 'Pero';
            isolatedScope.password = 'random';
            isolatedScope.login();
            expect(isolatedScope.loginSuccessfull).toBeFalsy();
        });

        it('should return true for good credentials', function () {
            isolatedScope.username = 'gkopevski';
            isolatedScope.password = 'password';
            isolatedScope.login();
            expect(isolatedScope.loginSuccessfull).toBeTruthy();
        });
    });

    describe('passing parameters to the directive', function () {
        it('should change the name of the company two-way data binding', function () {
            isolatedScope.name = 'Endava UK';
            $scope.$digest();// Prove that is 2 way binded
            expect($scope.name).toEqual('Endava UK');
        });

        it('should change the name of the company one-way data binding', function () {
            isolatedScope.fixedName = 'The String will still be endava';
            $scope.$digest(); // Prove that is 1 way binded
            expect($scope.fixedName).toEqual('Endava');
        });
    });
});

