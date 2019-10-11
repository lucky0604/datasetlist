from rest_framework import serializers
from datasetlist.models import Datasetlist

class DatasetSerializer(serializers.ModelSerializer):
    cateinfo = serializers.SerializerMethodField(read_only=True)
    #cateinfo = serializers.CharField(source='get_cateinfo_display')
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
            'created_at',
            'cateinfo'
            ]

    def get_cateinfo(self, obj):
        return str(obj.cateinfo)
        