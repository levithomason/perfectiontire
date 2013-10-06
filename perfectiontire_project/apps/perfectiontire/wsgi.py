import os


# We have to setup django settings up here
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "perfectiontire_project.settings.production")

# Cling requires some stuff in settings, so make sure we import it AFTER settings!
from django.core.wsgi import get_wsgi_application
from django.conf import settings
from dj_static import Cling
from raven import Client
from raven.middleware import Sentry


# Static file management
application = Cling(get_wsgi_application())

#client = Client(settings.SENTRY_DSN)
#application = Sentry(application, client=client)
