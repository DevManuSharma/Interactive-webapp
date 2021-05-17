from django.db import models

# Create your models here.

class Student(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.CharField(max_length=50, unique=True)
    password = models.BooleanField(null=False)
    phone_no = models.IntegerField(null=False)
    

