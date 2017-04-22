import csv
import requests

with open('engineering_courses.csv', 'rU') as csvfile:

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
             print course
             r = requests.post('http://34.200.240.84:3000/course/', data=course)
             count += 1


         except Exception as e:
             print e




