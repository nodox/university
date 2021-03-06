export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('demo', {
      url: '/demo',
      templateUrl: 'app/demo/demo.html',
      controller: 'DemoController',
      controllerAs: 'demo'
    })
    .state('docs', {
      url: '/docs',
      templateUrl: 'app/docs/docs.html',
      controller: 'DocsController',
      controllerAs: 'docs'
    });

  $urlRouterProvider.otherwise('/docs');
}
