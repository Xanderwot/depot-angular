import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import ProductsCreateController from './controller';
import productsStore from '../../../services/productsStore.service';

import './style.scss';

export default angular.module('app.productsCreate', [uirouter, productsStore])
  .config(routing)
  .controller('ProductsCreateController', ProductsCreateController)
  .name;
