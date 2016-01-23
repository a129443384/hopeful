from django.shortcuts import render
from registration.models import UserData

# Create your views here.
def registration(request):
    if request.method=='GET':
        return render(request, 'registration/registration.html')
    else: #post
        userData = UserData()
        userData.userName = request.POST.get('userName')
        userData.save()
        
        