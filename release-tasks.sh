#!/bin/bash

python manage.py migrate
python manage.py migrate backend
python ./backend/update_models.py
