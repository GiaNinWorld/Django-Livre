from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

def verificar(request):
    if request.method == 'POST':
        username = request.POST['nome']
        password = request.POST['senha']
        user = authenticate(username=username, password=password)
        
        if user and user.is_superuser:
            return redirect()
        else:
            return redirect()
    
    return redirect()
