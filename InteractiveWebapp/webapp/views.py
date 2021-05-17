from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class addStudent(APIView):
    def post(self,  request, format=None):
        print('POST Success')
        print(request.data)
        return Response({'Request': ' This is Post Request '}, status=status.HTTP_200_OK)

    def get(self, request):
        print('GET Success')
        return Response({'Request': ' This is GET Request '}, status=status.HTTP_200_OK)

