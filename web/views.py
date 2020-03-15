from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    context = {
        'active_page': 'home',
    }
    return render(request, 'web/index.html.j2', context)
