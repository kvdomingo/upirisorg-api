from django.urls import path
from . import views


urlpatterns = [
    path('member/<slug:slug>', views.api_member),
    path('home', views.home, name='home'),
    path('about', views.about, name='about'),
    path('members', views.members, name='members'),
    path('members/<slug:slug>', views.member, name='member'),
    path('alumni', views.construction, name='alumni'),
    path('gallery', views.construction, name='gallery'),
    path('contact', views.construction, name='contact'),
]
