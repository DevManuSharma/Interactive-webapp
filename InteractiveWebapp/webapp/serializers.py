from rest_framework import serializers
from .models import Student

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'unique_code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')
