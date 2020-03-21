import os
import upirisorg.settings
from cloudinary import CloudinaryImage
from django.templatetags.static import static
from django.urls import reverse
from django.conf import settings
from jinja2 import Environment
from datetime import datetime


ASSET_DIR = os.environ['CLOUDINARY_ASSET_LOCATION']

favicon = CloudinaryImage(f'{ASSET_DIR}/private/logo.png').build_url(
    crop='thumb',
    gravity='north',
    width=32,
    height=32,
    dpr='auto'
)
nav_logo = CloudinaryImage(f'{ASSET_DIR}/private/logo.png').build_url(
    crop='scale',
    width=512,
    dpr='auto'
)
graph_image = CloudinaryImage(f'{ASSET_DIR}/private/logo.png').build_url(
    crop='thumb',
    width=720,
    dpr='auto'
)

def environment(**options):
    env = Environment(**options)
    env.globals.update({
        'static': static,
        'url': reverse,
        'now': datetime.now(),
        'settings': settings,
        'nav_items': [
            'Home',
            'About',
            'Members',
            'Alumni',
            'Gallery',
            'Contact',
        ],
        'favicon': favicon,
        'graph_image': graph_image,
        'nav_logo': nav_logo,
    })
    return env
