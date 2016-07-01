import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import './style.css';

export default angular.module('app.home', [uirouter, randomNames])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
