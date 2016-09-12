/**
 * Created by gkopevski on 3/14/2016.
 */
'use strict';

angular.module('loginForm', [])
    .directive('login', function () {
        return {
            restrict: 'EA',
            scope: {
                name: '=',
                fixedName: '@'
            },
            replace: true,
            link: function (scope, element, attrs) {
                scope.loginSuccessfull = false;
                scope.login = function () {
                    if (scope.username === 'gkopevski' && scope.password === 'password') {
                        scope.loginSuccessfull = true;
                    }
                }
            },
            template: '<div>{{ name }} - {{ fixedName }}</div>',
        }
    });