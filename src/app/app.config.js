routing.$inject = ['$urlRouterProvider', '$locationProvider'];

// restangularConfig.$inject = ['RestangularProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

// export default function restangularConfig(RestangularProvider) {
//   RestangularProvider.setBaseUrl('/api/v1/');
// }
