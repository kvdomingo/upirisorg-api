from cloudinary import CloudinaryImage
from cloudinary.api import resources
from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from .models import Member


ASSET_DIR = settings.ASSET_DIR


def get_image_cloud_url(query):
    for data in query:
        data.picture_url = CloudinaryImage(f'{ASSET_DIR}/members/{data.picture_url}.jpg').build_url(
            aspect_ratio=0.8,
            crop='fill',
            gravity='face',
            width=512,
            dpr='auto',
            secure=True,
        )
        data.href = (''.join([n[0] for n in data.first_name.split()]) + data.last_name.replace(' ', '')).lower() + '-' + str(data.id)
    return query


def api_member(request, slug):
    data = get_image_cloud_url([Member.objects.get(slug=slug)])[0]
    images = resources(prefix=f'{ASSET_DIR}/member/{data.href}', type='upload', max_results=500)['resources']
    images = [i['public_id'] for i in images][::-1]
    return JsonResponse(dict(data=images))


def home(request):
    context = {'active_page': 'home'}
    return render(request, 'backend/index.html.j2', context)
