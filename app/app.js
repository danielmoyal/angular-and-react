import temp from 'shell/shell.html';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

// import shellController from "./shell/shell.controller";
// import homeController from "./home/home.controller";
// import aboutController from "./about/about.controller";

angular.module('exampleProject', ['ngMaterial', 'ui.router'])
    .config(function ($stateProvider, $mdThemingProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('shell', {
                url: '/',
                abstract: true,
                // templateUrl: 'shell/shell.html',
                template: `<b> hello </b>`
                //   controller: shellController
            })
            .state('shell.home', {
                url: '/home',
                templateUrl: 'index.html',
                //   controller: homeController

            })
            .state('shell.about', {
                url: '/about',
                templateUrl: '',
                //  controller: aboutController
            });

        $urlRouterProvider.otherwise('/');


        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('amber')
    });

