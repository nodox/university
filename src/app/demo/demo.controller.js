export class DemoController {
  constructor ($timeout, $http) {
    'ngInject';

    this.data = [];
    this.$http = $http;
  }


  getData() {
    console.log('Run button method');

    this.$http.get('/demo')
    .then( (res) => {
      console.log(res.data);
      this.data = res.data;

    }).catch((err) => {
      console.log(error);
    });

  }
}
