from rest_framework import serializers
from datasetlist.models import Datasetlist

class DatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datasetlist
        fields = [
            'id',
            'project_name',
            'category',
            'desc_info',
            'license_desc',
            'stars',
            'contributor_user',
            'project_year',
            'created_at'
            ]