from datasetlist.models import Datasetlist
from rest_framework.views import APIView
from rest_framework import viewsets, generics, filters
from django.http import Http404
from .serializers import DatasetSerializer
from rest_framework.response import Response
from rest_framework import status

# class DatasetListView(APIView):
#     def get(self, request, format = None):
#         datasets = Datasetlist.objects.all()
#         serializer = DatasetSerializer(datasets, many = True)
#         search_fields = ('project_name',)
#         return Response(serializer.data)

#     def post(self, request, format = None):
#         serializer = DatasetSerializer(data = request.data)
#         if serializer.is_valid:
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DatasetListViewSet(generics.ListCreateAPIView):
    queryset = Datasetlist.objects.all()
    serializer_class = DatasetSerializer
    search_fields = ['project_name']
    filter_backends = (filters.SearchFilter,)

class DatasetDetailView(APIView):
    def get_object(self, pk):
        try:
            return Datasetlist.objects.get(pk = pk)
        except Datasetlist.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        dataset = self.get_object(pk)
        serializer = DatasetSerializer(dataset)
        return Response(serializer.data)

    def put(self, request, pk, format = None):
        dataset = self.get_object(pk)
        serializer = DatasetSerializer(dataset, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format = None):
        dataset = self.get_object(pk)
        dataset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)