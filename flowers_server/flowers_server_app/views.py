from rest_framework import viewsets, generics

from .serializers import FlowerSerializer
from .models import Flower


class FlowerList(generics.ListCreateAPIView):
    queryset = Flower.objects.all()
    serializer_class = FlowerSerializer
