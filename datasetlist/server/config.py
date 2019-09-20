import os
import redis

from appdirs import AppDirs
from datetime import timedelta

from server.utils.date import utcnow

APP_NAME = 'dataset-list'
app_dirs = AppDirs(APP_NAME)

APP_CACHE_FOLDER = app_dirs.user_cache_dir
APP_DATA_FOLDER = app_dirs.user_data_dir

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
TEMPLATE_FOLDER = os.path.join(PROJECT_ROOT, 'server', 'templates')
STATIC_FOLDER = os.environ.get('FLASK_STATIC_FOLDER', os.path.join(PROJECT_ROOT, 'static'))

STATIC_URL_PATH = '/static'

BUNDLES = [
    'server.admin',
    'server.dataset',
    'server.security',
    'server.site'
]

EXTENSIONS = [
    'server.extensions.celery:celery',
    'server.extensions.mail:mail'
]

DEFERRED_EXTENSIONS = [
    'server.extensions.api:api',
    'server.extensions.admin:admin'
]

# Declare role inheritances
# Keys here correspond to roles a user explicitly has (as set in the database).
# Values should be a list of "inherited" roles. There is also a special flag,
# __CRUD__, which expands into the standard CREATE, VIEW, EDIT and DELETE roles.
# Role inheritances are loaded recursively, so, for example given the following:
# ROLE_HIERARCHY = {
#     'ROLE_ADMIN': ['ROLE_USER'],
#     'ROLE_USER': ['ROLE_POST'],
#     'ROLE_POST': ['__CRUD__'],
#     'ROLE_GUEST': ['ROLE_POST_VIEW']
# }
# Then ROLE_ADMIN users will also get ROLE_USER, ROLE_POST, ROLE_POST_CREATE,
# ROLE_POST_VIEW, ROLE_POST_EDIT, and ROLE_POST_DELETE roles.
# Likewise, ROLE_USER users will inherit the ROLE_POST, ROLE_POST_CREATE,
# ROLE_POST_VIEW, ROLE_POST_EDIT, and ROLE_POST_DELETE roles.
# However, ROLE_GUEST users will only inherit the ROLE_POST_VIEW role. (note
# that if you want unauthenticated users to have the ROLE_GUEST role, you'll
# need to implement and register a custom AnonymousUser class)
ROLE_HIERARCHY = {
    'ROLE_ADMIN': ['ROLE_USER']
}

def get_boolean_env(name, default):
    default = 'true' if default else 'false'
    return os.getenv(name, default).lower() in ['true', 'yes', '1']

class BaseConfig(object):
    # =============================================================
    # flask
    # =============================================================
    DEBUG = get_boolean_env('FLASK_DEBUG', False)
    SECRET_KEY = os.environ.get('FLASK_SECRET_KEY', 'labelhub-dataset')
    STRICT_SLASHES = False
    BUNDLES = BUNDLES

    # =============================================================
    # session/cookie
    # =============================================================
    SESSION_TYPE = 'redis'
    SESSION_REDIS = redis.Redis(
        host = os.getenv('FLASK_REDIS_HOST', '127.0.0.1'),
        port = int(os.getenv('FLASK_REDIS_PORT', 6379)),
    )
    SESSION_PROTECTION = 'strong'
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SECURE = True
    REMEMBER_COOKIE_HTTPONLY = True

    # SECURITY_TOKEN_MAX_AGE is fixed from time of token generation;
    # it does not update on refresh like a session timeout would. for that,
    # we set (the ironically named) PERMANENT_SESSION_LIFETIM
    PERMANENT_SESSION_LIFETIME = timedelta(minutes = 60)

    # ===========================================================
    # database
    # ===========================================================
    SQLALCHEMY_TRACK_MOTIFICATIONS = False

    ALEMBIC = {
        'script_location': os.path.join(PROJECT_ROOT, 'migrations')
    }

    # ===========================================================
    # celery
    # ===========================================================
    CELERY_BROKER_URL = 'redis://{host}:{port}/0'.format(
        host = os.getenv('FLASK_REDIS_HOST', '127.0.0.1'),
        port = os.getenv('FLASK_REDIS_PORT', 6379)
    )

    CELERY_RESULT_BACKEND = CELERY_BROKER_URL
    CELERY_ACCEPT_CONTENT = ('json', 'pickle')

    # ===========================================================
    # security
    # ===========================================================
    SECURITY_DATETIME_FACTORY = utcnow

    # specify which user field attributes can be used for login
    SECURITY_USER_IDENTIFY_ATTRIBUTES = ['email', 'username']

    