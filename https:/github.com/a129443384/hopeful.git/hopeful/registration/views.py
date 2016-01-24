from django.shortcuts import render
from registration.models import UserData

# Create your views here.
def registration(request):
    if request.method=='GET':
        return render(request, 'registration/registration.html')
    else: #post
        userData = UserData()
        userData.userName = request.POST.get('userName')
        userData.email = request.POST.get('email')
        userData.upperEmail = request.POST.get('upperEmail')
        userData.password = request.POST.get('password')
        userData.phone = request.POST.get('phone')
        userData.depot = request.POST.get('depot')
        userData.save()
        
        