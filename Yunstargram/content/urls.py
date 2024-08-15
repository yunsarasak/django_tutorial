from django.contrib import admin
from django.urls import path
from .views import Main, UploadFeed

urlpatterns = [
    path('', Main.as_view()),
    path('main', Main.as_view()),
    path('upload', UploadFeed.as_view())
]
