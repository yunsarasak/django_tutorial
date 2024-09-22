from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class User(AbstractBaseUser):
    # email
    # name
    # nick name
    # passwd
    # profile

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=24)
    nick_name = models.CharField(max_length=24)
    password = models.TextField()
    profile_image = models.TextField()

    USERNAME_FIELD = 'email'
    
    class Meta:
        db_table = "User"