from django.db import models

# Create your models here.

class Ninjas(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    ninjaTag = models.CharField(max_length=100)
    stars = models.IntegerField(default=0)

    def __str__(self):
        return self.firstName
