export default class ProductsListController {
  constructor(productsStore) {
    this.pageTitle = 'Products';
    this.productsStore = productsStore;
    this.page = 1;
    this.loadProducts(this.page);
    this.products = [];
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

  incPage() {
    this.page = this.page + 1;
  }
}
