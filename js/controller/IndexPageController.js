Movies.angular.controller('IndexPageController', ['$scope', '$compile', '$http', 'InitService', 'DataService', '$rootScope', function($scope, $compile, $http, InitService, DataService, $rootScope) {

  $scope.onItemClicked = function(movie) {
    if ($$('#detail').length > 0) $rootScope.$broadcast('movieClicked', movie);
    else {
      // Required if movie was clicked but new page is not loaded via ajax yet
      var destroyDetailPageEnter = $rootScope.$on('detailPageEnter', function(event, originalEvent) {
        // When detail page is loaded, send the event
        $rootScope.$broadcast('movieClicked', movie);
        
        // Destroy event-listener
        destroyDetailPageEnter();
      });
    }
  };

  InitService.addEventListener('ready', function() {
    DataService.getMovies('moviedata.json').then(function(result) {
      $scope.movies = result.data.movies;
    }, function(err) {
      console.error(err);
    });
  });

}]);