from django.conf.urls import url
from registration import views

urlpatterns = [
    url(r'^$', views.registration, name='registration'),
]
