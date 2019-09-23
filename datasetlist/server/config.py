from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# setup db
db = SQLAlchemy()

def create_app(**config_overrides):
    app = Flask(__name__)
    app.config.from_pyfile('settings.py')
    
    # apply overrides for tests
    app.config.update(config_overrides)

    # # initialize db
    db.init_app(app)
    migrate = Migrate(app, db)

    # import blueprints
    from github.views import github_app

    # register blueprints
    app.register_blueprint(github_app)

    return app