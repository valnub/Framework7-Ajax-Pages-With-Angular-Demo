/*jslint browser: true*/
/*global console, Framework7, Movies*/

Movies.angular.factory('DataService', ['$http', function ($http) {

    var pub = {};

    pub.getMovies = function () {
        return $http.get('moviedata.json');
    };

    return pub;
}]);