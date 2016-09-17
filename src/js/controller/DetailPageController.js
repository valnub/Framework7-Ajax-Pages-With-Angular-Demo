Movies.angular.controller('DetailPageController', ['$scope', '$compile', '$http', 'InitService', 'DataService', '$rootScope', function($scope, $compile, $http, InitService, DataService, $rootScope) {

  var rootEvents = [];

  $scope.$on('$destroy', function () {
    for (var i=0; i<rootEvents.length; i++) {
      rootEvents[i]();
    }
  });

  // Gets notified when movie was clicked
  rootEvents.push($rootScope.$on('movieClicked', function(event, movie) {
    $scope.movie = movie;
    $scope.$apply();
  }));
  
  rootEvents.push($rootScope.$on('detailPageLeave', function(event, originalEvent) {
    $scope.$destroy();
  }));

}]);