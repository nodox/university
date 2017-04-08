export class DocsController {
  constructor ($timeout, $http) {
    'ngInject';

    this.data = [];
    this.$http = $http;

    this.course_endpoint = {
      headers: ['Parameter', 'Required', 'Valid Options', 'Type', 'Default Value',  'Description'],
      row: [
        {
          param: 't',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Title: the name of the course or the title as seen in a university course catalog.'
        },
        {
          param: 'd',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Description: The description of the course as seen in a university course catalog.'
        },
        {
          param: 'u',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'University Name: The name of the college or university as seen on official school letterhead.'
        },
        {
          param: 'l',
          required: 'No',
          options: 'None',
          type: 'Integer',
          default_value: 'None',
          desc: 'Limit: The number of data records to return.'
        },
        {
          param: 'o',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Order: The number of data records to return'
        },
      ]
    };
  }

}
