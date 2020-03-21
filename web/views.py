import os
import upirisorg.settings
from cloudinary import CloudinaryImage
from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    context = {
        'active_page': 'home',
    }
    return render(request, 'web/index.html.j2', context)


def members(request):
    ASSET_DIR = os.environ['CLOUDINARY_ASSET_LOCATION']
    ec_files = ['10', '06', '21', '20', '05', '16', '12']
    ec_pics = [CloudinaryImage(f'{ASSET_DIR}/members/{n}.jpg').build_url(
        crop='thumb',
        width=512,
        dpr='auto'
    ) for n in ec_files]
    ec_names = [
        'Brianna Samson',
        'Hannah Eunice Obrique',
        'Jan Paul Martinez',
        'Nathalie Sanga',
        'Kenneth Domingo',
        'Christopher John de Castro',
        'Bryan Gutierrez',
    ]
    ec_positions = [
        'President',
        'Secretary-General',
        'Vice President for External Affairs',
        'Vice President for Internal Affairs',
        'Executive Officer for Promotions and Documentation',
        'Executive Officer for Logistics',
        'Chancellor of the Exchequer',
    ]
    context = {
        'active_page': 'members',
        'ec_data': zip(ec_pics, ec_names, ec_positions),
    }
    return render(request, 'web/members.html.j2', context)


def construction(request):
    return render(request, 'web/construction.html.j2')
