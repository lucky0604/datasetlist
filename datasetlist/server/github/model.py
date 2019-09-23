from config import db
from marshmallow import fields, Schema

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

    def __init__(self, data):
        self.project_name = data.get('project_name')
        self.category = data.get('category')
        self.desc_info = data.get('desc_info')
        self.license_desc = data.get('license_desc')
        self.stars = data.get('stars')
        self.contributor_user = data.get('contributor_user')
        self.project_year = data.get('project_year')
        self.created_at = data.get('created_at')

    def save(self):
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_all():
        data = DatasetList.query.all()
        print(data, ' --------- get all ----------')
        return DatasetList.query.all()

    def __repr(self):
        return '<id {}>'.format(self.id)

class DatasetListSchema(Schema):
    id = fields.Int(dump_only=True)
    project_name = fields.Str(required=True)
    category = fields.Str(required=True)
    desc_info = fields.Str(required=True)
    license_desc = fields.Str(required=True)
    stars = fields.Str(required=True)
    contributor_user = fields.Str(required=True)
    project_year = fields.Str(required=True)
    created_at = fields.Str(required=True)