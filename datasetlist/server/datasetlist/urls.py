from django.urls import include, path, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from .models import Datasetlist
from .api import serializers
from .api import views
# from rest_framework.routers import DefaultRouter
# router = DefaultRouter()
# router.register(r'datasets', views.DatasetListViewSet, basename='datasets')
# urlpatterns = router.urls

urlpatterns = [
    path('datasets/', views.DatasetListViewSet.as_view()),
    #path('datasets/<int:pk>/', views.DatasetDetailView.as_view()),
    #path('datasets/<category_info>/', views.DatasetListByCateViewSet.as_view(), name = 'category_api')
]

# urlpatterns = format_suffix_patterns(urlpatterns)