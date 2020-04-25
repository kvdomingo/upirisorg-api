import os, sys
sys.path.append('.')

import json
from dotenv import load_dotenv
load_dotenv()

import django
django.setup()

from django.conf import settings
from web.models import Member


def main():
    with open(
        os.path.join(settings.BASE_DIR, 'web', 'static', 'web', 'data', 'upiris1920.json'),
        'r',
        encoding='latin-1'
    ) as f:
        data = json.load(f)
    for d in data:
        obj, created = Member.objects.update_or_create(id=data[d]['pk'], **data[d]['fields'])
        status = 'Created' if created else 'Updated'
        print(f'{status} entry for {obj.first_name} {obj.last_name}')


if __name__ == '__main__':
    main()
