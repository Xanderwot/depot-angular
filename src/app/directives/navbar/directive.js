import angular from 'angular';
import template from './template.html';
import './style.scss';

class NavbarDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {};
  }
}

export default angular.module('directives.dpnavbar', [])
  .directive('dpNavbar', () => new NavbarDirective)
  .name;
