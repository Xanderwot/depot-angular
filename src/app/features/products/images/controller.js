export default class ProductsImagesController {
  constructor($mdDialog, images) {
    this.dialog = $mdDialog;
    this.images = images;
  }

  cancel() {
    this.dialog.cancel();
  }
}
