'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('default', {
        url: '/',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    }).state('login', {
        url: '/login',
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
    }).state('iec', {
        url: '/iec',
        templateUrl: 'view/iec.html',
        controller: 'iecCtrl'
    }).state('modbus', {
        url: '/modbus',
        templateUrl: 'view/modbus.html',
        controller: 'modbusCtrl'
    });
    $urlRouterProvider.otherwise('/'); //默认跳转到「default」
}])
