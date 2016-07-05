import angular from 'angular';
import template from './template.html';
import './style.scss';

class InfloaderDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      containerClass: '@',
      page: '=',
      total: '=',
      searchQuery: '=',
      loadFunc: '&loadFunc'
    };
  }

  link(scope, element, attrs) {
    let container = angular.element(document.querySelector(`.${scope.containerClass}`));
    container.on('scroll', () => {
      let top = element[0].getBoundingClientRect().top;
      let containerBottom = container[0].getBoundingClientRect().bottom;
      if ((top - 1) < containerBottom && scope.page < scope.total) {
        scope.currentPage = scope.page + 1;
        scope.$digest();
      }
    });
    scope.$watch('currentPage', (new_val, old_val) => {
      if (new_val != old_val) {
        if (scope.searchQuery) {
          scope.loadFunc({q: scope.searchQuery, page: scope.page + 1});
        } else {
          scope.loadFunc({page: scope.page + 1});
        }
      }
    });
  }
}

export default angular.module('directives.infloader', [])
  .directive('dpInfloader', () => new InfloaderDirective)
  .name;
