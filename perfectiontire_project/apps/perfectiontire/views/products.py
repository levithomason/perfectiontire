from django.shortcuts import render


def products(request):
    return render(request, 'perfectiontire/products.html')
