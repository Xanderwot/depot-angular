export default class ProductsCreateController {
  constructor(productsStore, $state) {
    this.productsStore = productsStore;
    this.state = $state;
  }

  create() {
    this.productsStore.create(this.attributes).then((resp) => {
      this.state.go('products');
      // Add message here
    }).catch((err) => {
      console.log(err);
    });
  }
}
