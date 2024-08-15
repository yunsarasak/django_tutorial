from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class User(AbstractBaseUser):
    # profile
    # name
    # nick name
    # email
    # passwd

    profile_iamge = models.TextField()
    name = models.CharField(max_length=24)
    nick_name = models.CharField(max_length=24)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    
    class Meta:
        db_table = "User"