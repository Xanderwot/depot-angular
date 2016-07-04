import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import ProductsListController from './controller';
import productsStore from '../../../services/productsStore.service';

import infloader from '../../../directives/infloader/directive';
import dpswiper from '../../../directives/dpSwiper/directive';

import './style.scss';

export default angular.module('app.productsList', [uirouter, productsStore, infloader, dpswiper])
  .config(routing)
  .controller('ProductsListController', ProductsListController)
  .name;
