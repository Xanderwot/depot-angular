import createController from '../create/controller';
import dialogTemplate from '../create/index.html';

export default class ProductsListController {
  constructor(productsStore, $mdDialog, $mdToast) {
    this.pageTitle = 'Products';
    this.productsStore = productsStore;
    this.page = 1;
    this.loadProducts(this.page);
    this.products = [];
    this.dialog = $mdDialog;
    this.toast = $mdToast;
  }

  loadProducts(page) {
    this.productsStore.getAll(page).then((resp) => {
      this.products.push.apply(this.products, resp.products);
      this.page = resp.page;
      this.total = resp.total;
    }).catch((err) => {
      console.log(err);
    });
  }

  showCreateDialog() {
    this.dialog.show({
      controller: createController,
      controllerAs: 'productsCreate',
      template: dialogTemplate,
      clickOutsideToClose: true
    }).then((resp) => {
      this.products.unshift(resp.product);
      this.toast.show(
        this.toast.simple()
          .textContent(`Product '${resp.product.title}' created!`)
          .position('top right')
          .hideDelay(3000)
      );
    });
  }
}
