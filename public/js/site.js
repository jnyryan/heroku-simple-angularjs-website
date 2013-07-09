var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/home.html', controller: 'HomeCtrl'})
    .when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl'})
    .when('/contact', {templateUrl: 'views/contact.html', controller: 'ContactCtrl'})
    .otherwise({redirectTo: '/home'});
});

function AppController ($scope, $rootScope, $http) {
  
}

function RouteCtrl ($scope, $rootScope, $routeParams) {
  // Getting the slug from $routeParams
  var slug = $routeParams.slug;
  
  $scope.$emit('routeLoaded', {slug: slug});
  $scope.page = $rootScope.pages[slug];
}

function HomeCtrl ($scope, $routeParams) {
	$scope.model = {
        message: "heroku simple rack site"
	}
}

function ContactCtrl ($scope, $routeParams) {
	$scope.model = {
        message: "Contact Page loaded"
    }
}

function AboutCtrl ($scope, $routeParams) {
	$scope.model = {
        message: "About Page Loaded"
	}
}
