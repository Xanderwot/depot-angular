import createController from '../create/controller';
import imagesController from '../images/controller';
import dialogTemplate from '../create/index.html';
import imagesTemplate from '../images/index.html';

export default class ProductsListController {
  constructor(productsStore, $mdDialog, $mdToast) {
    this.pageTitle = 'Products';
    this.productsStore = productsStore;
    this.page = 1;
    this.loadProducts(this.page);
    this.products = [];
    this.dialog = $mdDialog;
    this.toast = $mdToast;
    this.isSearch = false;
  }

  loadProducts(page) {
    this.isSearch = false;
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

  showImages(product) {
    this.dialog.show({
      controller: imagesController,
      controllerAs: 'productsImages',
      template: imagesTemplate,
      clickOutsideToClose: true,
      locals: {
        images: product.attachments
      }
    });
  }

  search(q, page) {
    this.productsStore.search(q, page).then((resp) => {
      if (this.isSearch) {
        if (page != 1) {
          this.products.push.apply(this.products, resp.products);
        } else {
          this.products = resp.products;
        }
      } else {
        this.isSearch = true;
        this.products = resp.products;
      }
      this.page = resp.page;
      this.total = resp.total;
    }).catch((err) => {
      console.log(err);
    });
  }
}
