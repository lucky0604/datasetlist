from flask import Blueprint

from config import db
from github.model import DatasetList

github_app = Blueprint('github_app', __name__)

@github_app.route('/')
def init():
    counter = DatasetList.query.first()
    print(counter)
    db.session.commit()
    # if not counter:
    #     counter = Counter(1)
    #     db.session.add(counter)
    #     db.session.commit()
    # else:
    #     counter.count += 1
    #     db.session.commit()

    return "<h1>Counter: " + str(counter.project_name) + "</h1>"