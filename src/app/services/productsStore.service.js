import angular from 'angular';

class ProductsStore {
  constructor(Restangular) {
    this.restangular = Restangular;
  }

  getAll(page) {
    return this.restangular.all('').customGET('products', {page: (page || 1) });
  }

  create(attributes) {
    return this.restangular.all('products').post(attributes);
  }
}

export default angular.module('services.products-store', [])
  .service('productsStore', ProductsStore)
  .name;
