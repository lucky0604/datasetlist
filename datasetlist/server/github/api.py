from flask import Blueprint, jsonify, json, request, Response
import json
from config import db
from github.model import DatasetList, DatasetListSchema

datasetListSchema = DatasetListSchema()
datasetListsSchema = DatasetListSchema(many=True)

github_app = Blueprint('github_app', __name__)

@github_app.route('/', methods = ['GET'])
def get_all_list():
    datasetLists = DatasetList.query.all()
    cur_list = datasetListsSchema.dump(datasetLists).data
    print(cur_list)
    return jsonify(cur_list.data)

def custom_response(res, status_code):
    return Response(
        mimetype='application/json',
        response = json.dumps(res),
        status = status_code
    )