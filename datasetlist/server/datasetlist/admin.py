from django.contrib import admin
from .models import Datasetlist
# Register your models here.
class DatasetListAdmin(admin.ModelAdmin):
    list_display = ['project_name', 'created_at']

admin.site.register(Datasetlist, DatasetListAdmin)