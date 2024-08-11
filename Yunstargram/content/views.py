from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Feed
from .models import User
from uuid import uuid4
from Yunstargram.settings import MEDIA_ROOT
from Yunstargram.settings import MEDIA_URL
import os

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

class UploadFeed(APIView):
    def post(self, request):

        file = request.data.get('file')

        uuid_name = uuid4().hex
        save_path = os.path.join(MEDIA_ROOT, uuid_name)

        with open(save_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        
        # image = request.data.get('image')
        image = uuid_name
        feed_content = request.data.get('feed_content')
        user_id = request.data.get('user_id')
        profile_image = request.data.get('profile_image')

        print(file)
        print(image)
        print(feed_content)
        print(user_id)
        print(profile_image)

        new_feed = Feed.objects.create(
            content=feed_content,
            image=image,
            profile_image=profile_image,
            user_id=user_id,
            like_count=0)

        new_feed.save()

        return Response(status=200)