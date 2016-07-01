routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('products_new', {
      url: '/products/new',
      template: require('./index.html'),
      controller: 'ProductsCreateController',
      controllerAs: 'productsCreate'
    });
}
