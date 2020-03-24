from pandas import read_csv
from numpy import nan as NaN
from datetime import datetime
from .models import *
from upirisorg import settings
from dotenv import load_dotenv


load_dotenv()

data = read_csv('web/static/web/data/ig.csv', encoding='latin-1', dtype=str)
for i, d in data.iterrows():
    query = Member.objects.get(pk=d['pk'])
    query.instagram = d['instagram']
    query.save()
    print(f'Updated {query.first_name} {query.last_name} with IG @{query.instagram}')
