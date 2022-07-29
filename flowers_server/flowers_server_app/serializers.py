from rest_framework import serializers
from .models import Flower
from drf_extra_fields.fields import Base64ImageField


class FlowerSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = Flower
        fields = "__all__"
