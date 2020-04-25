import os, sys
sys.path.append('..')

import subprocess
import json
from upirisorg import settings


def main():
    res = subprocess.run('python manage.py dumpdata web.member', stdout=subprocess.PIPE, cwd='../')
    data = json.loads(res.stdout)
    data = dict(zip(range(len(data)), data))
    with open(
        os.path.join(settings.BASE_DIR, 'web', 'static', 'web', 'data', 'upiris1920.json'),
        'w',
        encoding='latin-1'
    ) as f:
        json.dump(data, f, indent=4)


if __name__ == '__main__':
    main()
