from django.urls import include, path, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from .models import Datasetlist
from .api import serializers
from .api import views

urlpatterns = [
    path('datasets/', views.DatasetListView.as_view()),
    path('datasets/<int:pk>/', views.DatasetDetailView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)