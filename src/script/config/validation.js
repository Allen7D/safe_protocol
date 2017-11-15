'use strict';
angular.module('app').config(['$validationProvider', function($validationProvider) {
    var expression = {
        username: function(value) {
            var str = value + ''
            return str.length > 7;
        },
        password: function(value) {
            var str = value + ''
            return str.length > 5;
        },
        required: function(value) {
            return !!value;
        }
    };
    var defaultMsg = {
        username: {
            success: '',
            error: '长度至少8位'
        },
        password: {
            success: '',
            error: '长度至少6位'
        },
        required: {
            success: '',
            error: '不能为空'
        }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
