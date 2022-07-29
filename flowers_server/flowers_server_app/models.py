from django.db import models


class Flower(models.Model):
    # TODO: max file size?
    image = models.ImageField()
    title = models.CharField(max_length=30)
    subtitle = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
