import os
from cloudinary import CloudinaryImage
from django.templatetags.static import static
from webpack_loader.templatetags.webpack_loader import render_bundle
from django.urls import reverse
from django.conf import settings
from jinja2 import Environment
from datetime import datetime


ASSET_DIR = settings.ASSET_DIR

favicon = CloudinaryImage(f'{ASSET_DIR}/private/logo.png').build_url(
    crop='scale',
    width=32,
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
        'render_bundle': render_bundle,
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
