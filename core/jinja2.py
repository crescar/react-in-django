# core/jinja2.py

from django.urls import reverse
from jinja2 import Environment

def environment(**options):
    env = Environment(**options)
    env.globals.update({
        'static': reverse,
        'url': reverse,
    })
    return env