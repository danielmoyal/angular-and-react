'use strict';
let app = angular.module('exampleProject', ['ngMaterial', 'ui.router']);

    app.config(function ($stateProvider, $mdThemingProvider) {
        //TODO: define here routing

        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('amber')
    });