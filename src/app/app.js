// Dependencies
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngmaterial from 'angular-material';
import 'lodash';
import 'restangular';
import ngmessages from 'angular-messages';

// Routing
import routing from './app.config';
import restangularConfig from './restangular.config';

// Styles
import '../style/angular-material.css';
import '../style/app.css';

// Modules
import home from './features/home/index';
import productsList from './features/products/list/index';
import productsCreate from './features/products/create/index'

//Sidenav directive
import dpnavbar from './directives/navbar/directive';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME,
  [
    'restangular',
    ngmessages,
    uirouter,
    ngmaterial,
    home,
    productsList,
    productsCreate,
    dpnavbar
  ])
  .config(routing)
  .config(restangularConfig)

export default MODULE_NAME;
