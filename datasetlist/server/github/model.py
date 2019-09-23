from config import db

class DatasetList(db.Model):
    __tablename__ = 'datasetlist'
    id = db.Column(db.Integer, unique = True, primary_key = True)
    project_name = db.Column(db.String(100), nullable = False)
    category = db.Column(db.String(100))
    desc_info = db.Column(db.String(255))
    license_desc = db.Column(db.String(100))
    stars = db.Column(db.String(11))
    contributor_user = db.Column(db.String(20))
    project_year = db.Column(db.String(20))
    created_at = db.Column(db.String(40))
