'use strict';

// cache服务在 service > cache.js中
angular.module('app').directive('appHead', ['cache', '$state', function(cache, $state){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/head.html',
        scope: {
        },
        link: function($scope) {
            if(cache.get('name')) {
                $scope.username = cache.get('username');// 显示当前用户名，还有权限
            }
            $scope.logout = function() {
                cache.remove('username');
                cache.remove('password');
                $state.go('login');
            };
        }
    };
}]);
