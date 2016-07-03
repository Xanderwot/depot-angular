export default class ProductsCreateController {
  constructor(productsStore, $mdDialog) {
    this.productsStore = productsStore;
    this.dialog = $mdDialog;
  }

  create() {
    console.log(this.attributes);
    // this.productsStore.create(this.attributes).then((resp) => {
    //   this.dialog.hide(resp);
    //   // Add message here
    // }).catch((err) => {
    //   console.log(err);
    // });
  }

  cancel() {
    this.dialog.cancel();
  }
}
