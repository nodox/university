export class DocsController {
  constructor ($timeout, $http) {
    'ngInject';

    this.collegeData = [];
    this.courseData = [];
    this.$http = $http;
    this.demoCourseQuery = {};
    this.demoCollegeQuery = {};

    this.course_endpoint = {
      headers: ['Parameter', 'Required', 'Valid Options', 'Type', 'Default Value',  'Description'],
      row: [
        {
          param: 'u',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'University: The name of the college or university as seen on official school letterhead.'
        },
        {
          param: 't',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Title: the name of the course or the title as seen in a university course catalog.'
        },
        {
          param: 'c',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Code: THe course code as listed by the university course catalog.'
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
          param: 'l',
          required: 'No',
          options: 'None',
          type: 'Integer',
          default_value: 'None',
          desc: 'Limit: The number of data records to return.'
        },
        {
          param: 's',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'School: The school within a university the course belongs to'
        },
        {
          param: 'cr',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Credits: the number of credits as seen in the university course catalog.'
        },
        {
          param: 'time',
          required: 'No',
          options: 'HH:MM A/P',
          type: 'String',
          default_value: 'None',
          desc: 'Time: The time a class is offered'
        },
        {
          param: 'days',
          required: 'No',
          options: 'MTWRF or -----',
          type: 'String',
          default_value: 'None',
          desc: 'Days: The days a class is offered. Use a single letter for day of week.'
        },
        {
          param: 'instructor',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Instructor: The instructors assigned to the course as seen by the course catalog.'
        },
      ]
    };

    this.university_endpoint = {
      headers: ['Parameter', 'Required', 'Valid Options', 'Type', 'Default Value',  'Description'],
      row: [
        {
          param: 'n',
          required: 'No',
          options: 'None',
          type: 'String',
          default_value: 'None',
          desc: 'Name: The name of the university'
        },
      ]
    };

  }

  testCode() {
    alert('Yooo');
  }

  getCourseData() {
    console.log('Run button method');

    this.$http.get('/course', {params: this.demoCourseQuery})
    .then( (res) => {
      // console.log(res.data);
      this.courseData = res.data;

    }).catch((err) => {
      console.log(error);
    });

  }

  getCollegeData() {
    this.$http.get('/university', {params: this.demoCollegeQuery})
    .then( (res) => {
      // console.log(res.data);
      this.collegeData = res.data;

    }).catch((err) => {
      console.log(error);
    });
  }
}
