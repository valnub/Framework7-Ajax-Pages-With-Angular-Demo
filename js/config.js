/*jslint browser: true*/
/*global console, Movies, angular, Framework7*/

var $$ = Dom7;

// Init angular
var Movies = {};

Movies.config = {
};

$$(document).on('DOMContentLoaded', function() {
    Movies.fw7 = {
        app: new Framework7({
            pushState: true,
            swipePanel: 'left',
            animateNavBackIcon: true
        }),
        options: {
            dynamicNavbar: true,
            domCache: true
        },
        views: []
    }
});
Movies.angular = angular.module('Movies', []);