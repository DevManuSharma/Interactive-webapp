from django.urls import path
from django.urls.conf import include
from .views import addStudent


urlpatterns = [
    path('add_student/', addStudent.as_view()),
]

