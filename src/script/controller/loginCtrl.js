'use strict';

angular.module('app').controller('loginCtrl', ['cache', '$state', '$http', '$scope', function (cache, $state, $http, $scope) {
    $scope.username = cache.get('username') || '';
    $scope.password = cache.get('password') || '';
    $scope.submit = function () {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1.0/user',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                username: $scope.username,
                password: $scope.password
            }
        }).then(function successCallback(resp) {
            console.log(resp);
            cache.put('username', $scope.username);
            cache.put('password', $scope.password);
            $state.go('iec');
        }, function errorCallback(resp) {
            console.log(resp)
            console.log('服务器连接失败！');
            $state.go('login');
        });
    }
    $scope.reset = function () {
        $scope.username = '';
        $scope.password = '';
        cache.remove('username');
        cache.remove('password');
    }
}]);
