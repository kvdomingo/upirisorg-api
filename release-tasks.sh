#!/bin/bash

python manage.py migrate
python ./web/update_models.py
