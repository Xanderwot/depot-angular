export default class HomeController {
  constructor (randomNames) {
    this.name = 'World';
    this.random = randomNames;
  }

  changeName() {
    this.name = 'Change';
  }

  randomName() {
    this.name = this.random.getName();
  }

}
