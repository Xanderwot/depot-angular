import angular from 'angular';

class ProductsStore {
  constructor(Restangular) {
    this.restangular = Restangular;
  }

  getAll(page) {
    return this.restangular.all('').customGET('products', {page: (page || 1) });
  }

  create(attributes) {
    return this.restangular.all('products').withHttpConfig({transformRequest: angular.identity})
              .customPOST(attributes, undefined, undefined, {'Content-Type': undefined});
  }

  search(q, page) {
    return this.restangular.all('products').customGET('search', {q: q, page: (page || 1)});
  }
}

export default angular.module('services.products-store', [])
  .service('productsStore', ProductsStore)
  .name;
