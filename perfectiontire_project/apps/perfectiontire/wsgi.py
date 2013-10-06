import os

# We have to setup django settings up here
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "perfectiontire_project.settings.production")

# Cling requires some stuff in settings, so make sure we import it AFTER settings!
from django.core.wsgi import get_wsgi_application
from dj_static import Cling

# Static file management
application = Cling(get_wsgi_application())
