// Dependencies
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngmaterial from 'angular-material';
import 'lodash';
import 'restangular';
import ngmessages from 'angular-messages';
import ngmdicons from 'angular-material-icons';
import 'lf-ng-md-file-input';

// Routing
import routing from './app.config';
import restangularConfig from './restangular.config';

// Styles
import '../style/angular-material.css';
import '../style/app.css';
import '../style/lf-ng-md-file-input.css'

// Modules
import home from './features/home/index';
import productsList from './features/products/list/index';

//Sidenav directive
import dpnavbar from './directives/navbar/directive';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME,
  [
    'restangular',
    ngmdicons,
    ngmaterial,
    ngmessages,
    uirouter,
    'lfNgMdFileInput',
    home,
    productsList,
    dpnavbar
  ])
  .config(routing)
  .config(restangularConfig)

export default MODULE_NAME;
