import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['John', 'Jack', 'Jim', 'Bob'];
    this.selectedName = null;
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    if (this.selectedName != this.names[rand]) {
      this.selectedName = this.names[rand];
      return this.names[rand];
    } else {
      this.getName();
    }
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;
