from django.db import models

# Create your models here.
class UserData(models.Model):
    userName = models.TextField(default='',max_length=50)
    email = models.EmailField(default='',max_length=50)
    upperEmail = models.EmailField(default='',max_length=50)
    password = models.CharField(max_length=50)
    phone = models.TextField(default='',max_length=15)
    depot = models.TextField(default='',max_length=10)
    email = models.TextField(default='',max_length=50)
    permission = models.CharField(max_length=3)
    eaTime = models.TimeField(auto_now=True)#EA使用期限
    eaPermission = models.CharField(default='111',max_length=3)#EA使用權限(可使用幾隻)
    dataOpen = models.IntegerField(default=0)#帳號啟用0未啟用1啟用2封鎖