routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('products', {
      url: '/products',
      template: require('./index.html'),
      controller: 'ProductsListController',
      controllerAs: 'productsList'
    });
}
