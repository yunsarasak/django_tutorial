from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from .models import User
from django.contrib.auth.hashers import make_password

# Create your views here.
class Join(APIView):
    def get(self, request):
        print("get called")
        return render(request, 'user/join.html')

    def post(self, request):
        print("post called")
        email = request.data.get('email', None)
        name = request.data.get('name', None)
        nick_name = request.data.get('nick_name', None)
        password = request.data.get('password', None)
        encrypted_password = make_password(password)

        new_user = User.objects.create(email=email,
                            name=name,
                            nick_name=nick_name,
                            password=encrypted_password,
                            profile_image='default_image.jpg')

        new_user.save()

        return Response(status=200)
    
class Login(APIView):
    def get(self, request):
        return render(request, 'user/login.html')
        pass

    def post(self, request):
        pass