export default class ProductsCreateController {
  constructor(productsStore, $mdDialog) {
    this.productsStore = productsStore;
    this.dialog = $mdDialog;
  }

  create() {
    let formData = new FormData();
    _.map(this.attributes, (v, k) => {
      formData.append(k, v);
    });
    angular.forEach(this.files, (file) => {
      formData.append('attachments_attributes[][file]', file.lfFile);
    });
    this.productsStore.create(formData).then((resp) => {
      this.dialog.hide(resp);
    }).catch((err) => {
      console.log(err);
    });
  }

  cancel() {
    this.dialog.cancel();
  }
}
