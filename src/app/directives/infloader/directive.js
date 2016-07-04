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

  // controller($scope, $state, MessagesService) {
  //   $scope.state = $state;
  //   $scope.service = MessagesService;
  // }

  link(scope, element, attrs) {
    let container = angular.element(document.querySelector(`.${scope.containerClass}`));
    container.on('scroll', () => {
      let top = element[0].getBoundingClientRect().top;
      let containerBottom = container[0].getBoundingClientRect().bottom;
      if ((top - 1) < containerBottom && scope.page < scope.total) {
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
