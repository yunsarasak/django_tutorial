from django.shortcuts import render
from rest_framework.views import APIView


class Main(APIView):
    def get(self, request):
        print("called get")
        return render(request, "yunstargram/main.html")

    def put(self, request):
        print("called put")
        return render(request, "yunstargram/main.html")
         