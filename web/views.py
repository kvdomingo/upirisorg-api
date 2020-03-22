import os
from upirisorg import settings
from cloudinary import CloudinaryImage
from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from .models import *


ASSET_DIR = settings.ASSET_DIR

def getImageCloudUrl(query):
    for data in query:
        data.picture_url = CloudinaryImage(f'{ASSET_DIR}/members/{data.picture_url}.jpg').build_url(
            aspect_ratio=0.8,
            crop='fill',
            gravity='face',
            width=512,
            dpr='auto'
        )
    return query


def home(request):
    context = {
        'active_page': 'home',
    }
    return render(request, 'web/index.html.j2', context)


def members(request):
    ec_id = [18, 36, 35, 15, 8, 5, 27]
    ec_data = getImageCloudUrl([Member.objects.get(pk=i) for i in ec_id])
    ec_positions = [
        'President',
        'Vice President for External Affairs',
        'Vice President for Internal Affairs',
        'Secretary-General',
        'Executive Officer for Promotions and Documentation',
        'Executive Officer for Logistics',
        'Chancellor of the Exchequer',
    ]

    exte_data = getImageCloudUrl(Member.objects.filter(committee='E'))
    inte_data = getImageCloudUrl(Member.objects.filter(committee='I'))
    promos_data = getImageCloudUrl(Member.objects.filter(committee='P'))
    log_data = getImageCloudUrl(Member.objects.filter(committee='L'))
    fin_data = getImageCloudUrl(Member.objects.filter(committee='F'))

    context = {
        'active_page': 'members',
        'ec_data': zip(ec_data, ec_positions),
        'exte_data': exte_data,
        'inte_data': inte_data,
        'promos_data': promos_data,
        'log_data': log_data,
        'fin_data': fin_data,
    }
    return render(request, 'web/members.html.j2', context)


def member(request, mem_id):
    pass


def construction(request):
    return render(request, 'web/construction.html.j2')
