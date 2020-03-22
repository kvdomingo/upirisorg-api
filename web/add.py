from pandas import read_csv
from numpy import nan as NaN
from datetime import datetime
from .models import *
from upirisorg import settings
from dotenv import load_dotenv


load_dotenv()

data = read_csv('web/static/web/data/upiris1920.csv', encoding='latin-1', dtype=str)
if 'id' in data.keys():
    data = data.drop('id', 1)
data = data.replace(NaN, '')
data['year'] = data['year'].replace('', None)
data['birthday'] = data['birthday'].replace('', None)
data['contact_number'] = data['contact_number'].replace('', None)
for i, d in data.iterrows():
    _, created = Member.objects.get_or_create(**dict(d))
