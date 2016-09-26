var app = angular.module('resumeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/resumePopup', {
    templateUrl: 'resumePopup.html',
    controller: 'resumeController'
  })
  .when('/testing', {
    templateUrl: '/portfolio-website/resumePopup.html',
    controller: 'resumeController'
  })
})

app.controller('resumeController', function($scope, $http, $location, $anchorScroll) {
  $scope.view = {};
  $scope.view.popUp = true;

  $scope.view.openPopUp = function () {
    $scope.view.popUp = true;
    console.log('working');
  }
  $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
})
