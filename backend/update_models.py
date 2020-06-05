import os, sys
sys.path.append('.')

import json
from dotenv import load_dotenv
load_dotenv()

import django
django.setup()

from django.conf import settings
from backend.models import Member


def main():
    with open(
        os.path.join(settings.BASE_DIR, 'backend', 'static', 'backend', 'data', 'upiris1920.json'),
        'r',
        encoding='latin-1'
    ) as f:
        data = json.load(f)
        if len(data) == 0:
            return 0
    for d in data:
        try:
            obj, created = Member.objects.update_or_create(id=data[d]['pk'], defaults=dict(**data[d]['fields']))
            status = 'Created' if created else 'Updated'
            print(f'{status} entry for {obj.first_name} {obj.last_name}')
        except:
            pass


if __name__ == '__main__':
    main()
