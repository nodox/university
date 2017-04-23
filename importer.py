import csv
import requests

# file = 'wustl_engineering_courses.csv'
# file = 'wustl_artsci_courses.csv'
file = 'michigan_courses_cleaned.csv'

with open(file, 'rU') as csvfile:

    reader = csv.DictReader(csvfile, delimiter=',')
    count = 0
    for row in reader:

        try:
            course = {}
            course['title'] = row['title']
            course['description'] = row['description']
            course['collegeId'] = row['collegeId']
            course['building'] = row['building']
            course['code'] = row['code']
            course['days'] = row['days']
            course['credits'] = row['credits']
            course['time'] = row['time']
            course['instructor'] = row['instructor']
            course['department'] = row['department']
            course['school'] = row['school']
            # print course
            r = requests.post('http://localhost:3000/course/', data=course)
            count += 1


        except Exception as e:
            print 'error?'
            print e




