from django.urls import path
from . import views


urlpatterns = [
    path('member/<slug:slug>', views.api_member),
]
