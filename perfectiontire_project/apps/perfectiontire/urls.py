from django.contrib import admin
from django.conf.urls import patterns, include, url

from .views.home import home
from .views.products import products

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', home, name='home'),
    url(r'^products/$', products, name='products'),
    # url(r'^perfectiontire/', include('perfectiontire.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
