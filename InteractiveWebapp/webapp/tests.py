import requests
from django.test import TestCase

# Create your tests here.
data = {
    'username': 'ram',
    'email': 'ram@gmail.com',
    'password': 'ram@pass123',
    'phone_no': '8594761235'
}
resp = requests.post('http://127.0.0.1:8000/api/add_student/', data = data)

print(resp)