from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# setup db
db = SQLAlchemy()
app = Flask(__name__)
ma = Marshmallow(app)

def create_app(**config_overrides):
    
    app.config.from_pyfile('settings.py')
    
    # apply overrides for tests
    app.config.update(config_overrides)

    # # initialize db
    db.init_app(app)
    migrate = Migrate(app, db)

    # import blueprints
    from github.api import github_app

    # register blueprints
    app.register_blueprint(github_app)

    return app