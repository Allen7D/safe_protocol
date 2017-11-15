'use strict';

angular.module('app').controller('loginCtrl', ['cache', '$state', '$http', '$scope', function (cache, $state, $http, $scope) {
    $scope.submit = function () {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1.0/user',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                username: $scope.user.username,
                password: $scope.user.password
            }
        }).then(function successCallback(resp) {
            alert('成功！')
            cache.put('username', $scope.user.username);
            cache.put('password', $scope.user.password);
            $state.go('iec');
        }, function errorCallback(resp) {
            console.log(resp)
            console.log('服务器连接失败！');
            $state.go('login');
        });
    }
}]);
