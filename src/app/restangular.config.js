restangularConfig.$inject = ['RestangularProvider'];

export default function restangularConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/v1/');
}
