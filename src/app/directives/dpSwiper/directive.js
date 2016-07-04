import angular from 'angular';
import template from './template.html';
import './style.scss';

class SwiperDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      items: '=',
      method: '@'
    }
  }

  // controller($scope, $state, MessagesService) {
  //   $scope.state = $state;
  //   $scope.service = MessagesService;
  // }

  link(scope, element, attrs) {
    element.ready(() => {
      let mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true
      });
    });
    // let mySwiper = new Swiper('.swiper-container', {
    //   // Navigation arrows
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',
    // });
  }
}

export default angular.module('directives.dpswiper', [])
  .directive('dpSwiper', () => new SwiperDirective)
  .name;
