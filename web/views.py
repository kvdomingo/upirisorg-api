from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    context = {
        'active_page': 'home',
    }
    return render(request, 'web/index.html.j2', context)

def construction(request):
    return render(request, 'web/construction.html.j2')
