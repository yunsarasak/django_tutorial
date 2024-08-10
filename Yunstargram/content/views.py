from django.shortcuts import render
from rest_framework.views import APIView
from .models import Feed
from .models import User

# Create your views here.
class Main(APIView):
    def get(self, request):
        feed_list = Feed.objects.all().order_by('-id')
        default_user = User.objects.all()


        # print("default user id : ", default_user[0].id)

        # for feed_item in feed_list:
        #     print(feed_item.user_id)
        #     print(feed_item.image)
        #     print(feed_item.profile_image)
        #     print(feed_item.content)
        #     print(feed_item.like_count)

        return render(request, "yunstargram/main.html", context=dict(feeds=feed_list, defaultUser=default_user))