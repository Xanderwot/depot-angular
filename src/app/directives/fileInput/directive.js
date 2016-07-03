import angular from 'angular';
import template from './template.html';
import './style.scss';

class FileInputDirective {
  constructor() {
    this.restrict = 'E'
    this.template = template;
  }

  // link(scope, element, attrs) {
  //   const input = element.find('#dp-file-input');
  //   const button = element.find('#dp-file-input-button');
  //   console.log(input);
  //   console.log(button);
  //   if (input.length && button.length) {
  //     button.click((e) => input.click());
  //   }
  // }
}

export default angular.module('directives.file-input', [])
  .directive('dpFileInput', () => new FileInputDirective)
  .name;
