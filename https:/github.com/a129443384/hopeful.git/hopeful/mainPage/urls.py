from django.conf.urls import url
from mainPage import views

urlpatterns = [
    url(r'^$', views.mainPage, name='mainPage'),
]
