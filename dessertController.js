(function () {
    'use strict';

    angular.module('java2days.dessert')
        .controller('DessertController',
        function ($scope) {
            $scope.title = 'Title!';

            $scope.name = 'Poly';

            $scope.fixedName = 'Ciment!';

            // var i = 1;
            // $interval(function () {
            //     $scope.name = scope.name + i;
            //     $scope.fixedName = scope.fixedName + i;
            // }, 5000);

        });

}());