from django.urls import include, path
from .views import FlowerList

urlpatterns = [
    path("flowers/", FlowerList.as_view(), name="flowers"),
]
