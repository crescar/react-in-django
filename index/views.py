from django.shortcuts import render

def index(request):
    contexto = {
        'mensaje': '¡Bienvenido a mi proyecto Django con Jinja2!'
    }
    return render(request, 'index/index.html', contexto)