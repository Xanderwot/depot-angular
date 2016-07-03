import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import ProductsListController from './controller';
import productsStore from '../../../services/productsStore.service';

import infloader from '../../../directives/infloader/directive';
import fileinput from '../../../directives/fileinput/directive';

import './style.scss';

export default angular.module('app.productsList', [uirouter, productsStore, infloader, fileinput])
  .config(routing)
  .controller('ProductsListController', ProductsListController)
  .name;
