from django.shortcuts import render,redirect

# Create your views here.
def mainPage(request):
    return render(request, 'mainPage/home.html')
